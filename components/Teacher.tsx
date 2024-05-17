import React, { useEffect } from "react";
import Input from "./shared/input/Input";
import Select from "./shared/select/Select";
import Table from "./shared/reusableTable/Table";
import { getRequest } from "@/api/apiCall";
import { STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import ClassCard from "@/components/shared/classCard/ClassCard";
import { useQuery } from "@tanstack/react-query";

export default function Teacher() {
  const handleChange = () => {};

  const Class = ["JSS 1", "JSS 2", "JSS 3"];

  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("school_uid");
  const { data: studentData } = useQuery({
    queryKey: [queryKeys.getStudents],
    queryFn: async () => await getRequest({ url: STUDENTS(uid, 1) }),
  });

  const [students, setStudents] = React.useState([]);
  useEffect(() => {
    setStudents(studentData?.data);
  }, [studentData]);

  //  console.log(students)

  const mappedStudents = students?.map((std) => {
    return {
      Name: std.full_name,
      Class: std.current_class.name,
      // Gender: std.gender,
      // "Date of birth": std.date_of_birth,
      // "Religion": std.religion,
      // "State": std.state_of_origin,
      // "Email": std.email,
    };
  });

  const mappedImages = students?.map((std) => {
    return {
      Image: std.image,
    };
  });

  const mappedIds = students?.map((std) => {
    return {
      ID: std.id,
    };
  });

  console.log(mappedIds);

  return (
    <div className=" p-3">
      {/* top */}
      <div className=" flex flex-col justify-start gap-2  border-b-2 py-4 ">
        <div className=" text-xl font-bold ">Welcome Back, Musa</div>
        <div className=" text-lg font-normal">
          Here are some insights into your daily activities
        </div>
      </div>

      {/* middle section */}
      <div className=" flex justify-between pt-4 static ">
        <div>
          <div className="">
            <Input
              size="large"
              disabled={false}
              error={null}
              success={null}
              change={handleChange}
              name="search"
              text={"Search Students"}
              value={undefined}
            />
          </div>
        </div>
        <div>
          {" "}
          <Select
            options={Class}
            placeholder="Select class"
            change={undefined}
            text="class"
            state={undefined}
            setState={undefined}
            name="class"
          />
        </div>
      </div>

      {/* bottom */}
      <div>
        <Table
          students={mappedStudents}
          imageUrls={mappedImages}
          IDs={mappedIds}
          hasCheckBox={false}
          hasImage={true}
          isAttendance={true}
        ></Table>
      </div>
    </div>
  );
}
