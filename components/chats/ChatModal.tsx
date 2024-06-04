import React, { useEffect, useState } from "react";
import Multiselect from "../shared/select/Multiselect";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKey";
import { getRequest } from "@/api/apiCall";
import { CLASSSTUDENTS, HOMEROOM, HOMEROOMS, STUDENTS } from "@/api/apiUrl";
import Button from "../shared/button/Button";

export default function ChatModal({ submit }) {
  const [state, setState] = useState();
  const [studentState, setStudentState] = useState();
  const [groupState, setGroupState] = useState(null);
  const [singleOpen, setSingleOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);

  //   console.log(groupOpen);
  useEffect(() => {
    console.log(state);
    if (state === "Single") {
      setSingleOpen(true);
      setGroupOpen(false);
    } else if (state === "Group") {
      setGroupOpen(true);
      setSingleOpen(false);
    } else {
      setSingleOpen(false);
      setGroupOpen(false);
    }
  }, [state]);

  const [off, setOff] = useState(1);
  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");

  // list of all students
  const [students, setStudents] = React.useState([]);
  const { data: studentData } = useQuery({
    queryKey: [queryKeys.getStudents, off],
    queryFn: async () => await getRequest({ url: STUDENTS(uid, off) }),
  });

  useEffect(() => {
    setStudents(studentData?.data);
  }, [studentData]);

  const mappedStudents = students?.map((std) => {
    return { value: std.full_name, label: std.full_name };
  });

  // list of all classes
  const { data: classData } = useQuery({
    queryKey: [queryKeys.getclass],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) }),
  });

  const [classes, setclasses] = useState([]);
  useEffect(() => {
    setclasses(classData?.data);
  }, [classData]);

  const mappedClasses = classes?.map((cla) => {
    return { value: cla.id, label: cla.name };
  });

  const [classId, setClassId] = useState([]);
  let ids;
  useEffect(() => {
    console.log(groupState);
    if (groupState) {
      ids = groupState.map((grp) => grp.value);
      console.log(ids); // This will log the new class IDs
      setClassId(ids);
    }
  }, [groupState]);

  useEffect(() => {
    // console.log(studentState);
    console.log(classId[0]);
  }, [classId]);

  // list of all students within a class
  const { data: classStudentData } = useQuery({
    queryKey: [queryKeys.getClass, classId[0]],
    queryFn: async () =>
      await getRequest({ url: CLASSSTUDENTS(uid, classId[0]) }),
  });

  const [classStudents, setclassStudents] = useState([]);
  useEffect(() => {
    setclassStudents(classStudentData?.data);
    console.log(classStudents);
  }, [classStudentData]);

  useEffect(() => {
    console.log(studentState);
  }, [studentState]);

  const recipientOptions = [
    { value: "Single", label: "Single" },
    { value: "Group", label: "Group" },
  ];

  //   console.log(mappedStudents);

  return (
    <div
      className={`flex flex-col gap-5 w-[700px] overflow-y-scroll max-h-[500px] scrollbar-hidden`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex text-base font-medium">Recipients</div>
        <div className="">
          <Select
            options={recipientOptions}
            placeholder={"Please Select Recipients"}
            state={state}
            setState={setState}
            text={""}
            change={undefined}
            name={"recipient"}
          />
        </div>
      </div>
      {singleOpen ? (
        <div className="flex flex-col gap-2">
          <div className="flex text-base font-medium">Select Student</div>
          <div>
            <Select
              options={mappedStudents}
              placeholder={"Please Select Student"}
              state={studentState}
              setState={setStudentState}
              text={""}
              change={undefined}
              name={""}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {groupOpen ? (
        <div className="flex flex-col gap-3">
          <div className="flex text-base font-medium">Select Group</div>
          <div>
            <Multiselect
              options={mappedClasses}
              placeholder={"Please Select Group"}
              state={groupState}
              setState={setGroupState}
            />
          </div>
          <div className="flex text-base font-medium">
            Please Confirm Selection
          </div>
          <div className=" grid grid-cols-2 gap-2">
            {classStudents &&
              classStudents.map((stu) => (
                <div key={stu.id} className=" flex  gap-2 p-2 border border-gray-500 rounded-lg ">
                    <div className="flex justify-center items-center"><input type="checkbox" name="" id="" className=" h-4 w-4 " /></div>
                  <div className=" text-lg font-semibold">{stu.full_name}</div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2">
        <div className="flex text-base font-medium">Title</div>
        <div>
          <Input
            size="large"
            text={"Please Enter message Title"}
            name={""}
            error={false}
            success={false}
            disabled={false}
            change={undefined}
            value={undefined}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex text-base font-medium">Messages</div>
        <div>
          <textarea
            className="rounded-md font-medium h-52 w-full border border-gray-500 focus:outline-teal-200 hover:border-teal-200 disabled:bg-gray-100 py-2 px-6 text-base scrollbar-hidden"
            placeholder="Enter Message Here"
          />
        </div>
      </div>
      <div>
        <Button
          intent="primary"
          size="base"
          text={"Send"}
          disabled={false}
          onClick={submit}
        />
      </div>
    </div>
  );
}
