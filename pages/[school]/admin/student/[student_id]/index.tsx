import { getRequest, getSchool, patchRequest } from "@/api/apiCall";
import { GETSCHOOL, HOMEROOMS, STUDENT, STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Studentlayout from "@/components/shared/dashboardLayout/studentlayout";
import Imagelogic from "@/components/shared/imagelogic";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/select/Select";
import statesInNigeria from "@/components/stateInNigeria";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AddStaffState } from "../../staff/add";
import { SignUpState } from "../add";


export default function Profilepage() {
  const Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const [state, setState] = useState();
  const [genderState, setGenderState] = useState();
  const [classState, setClassState] = useState();

  const States = statesInNigeria;

  const router = useRouter();
  const params: { school: string; student_id: string } = useParams();

  const school = params?.school;
  const student_id = params?.student_id;

  const { data } = useQuery({
    queryKey: [queryKeys.getSchool, school],
    queryFn: async () => await getSchool({ url: GETSCHOOL(school) }),
    retry: 2,
    enabled: !!school,
  });

  const [schoolData, setSchoolData] = useState(data?.data);
  useEffect(() => {
    setSchoolData(data?.data);
  }, [data?.data]);

  const { data: getstudent } = useQuery({
    queryKey: [queryKeys.getstudent, schoolData, student_id],
    queryFn: async () =>
      await getRequest({ url: STUDENT(schoolData?.uid, student_id) }),
  });

  const [student, setStudent] = useState<any>({});
  useEffect(() => {
    if (getstudent?.data) {
      setStudent(getstudent.data);
    }
  }, [getstudent]);

  const mutation = useMutation({
    mutationFn: async (updateStudent: any) =>
      await patchRequest({
        url: STUDENT(schoolData?.uid, student_id),
        data: updateStudent,
      }),
    onSuccess: (data, variables) => {
      setStudent((prev) => ({ ...prev, ...variables }));
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setStudent((prev) => ({ ...prev, [name]: value }));
    mutation.mutate({ [name]: value });
  };

  // const handleClassChange = (value) => {
  //   setClassState(value);
  //   setStudent((prev) => ({
  //     ...prev,
  //     current_class: { ...prev.current_class, name: value },
  //   }));
  //   mutation.mutate({
  //     current_class: { ...student.current_class, name: value },
  //   });
  // };

  // const handleSelectChange = () => {
  //   console.log(state);
  //   console.log("name");
  //   setStudent((prev) => ({ ...prev, state_of_origin: state }));
  //   mutation.mutate({ state_of_origin: state });
  // };

  // const handleGenderSelectChange = (name) => {
  //   setStudent((prev) => ({ ...prev, [name]: genderState }));
  //   mutation.mutate({ [name]: genderState });
  // };

  useEffect(() => {
    console.log(classState);
    setStudent((prev) => ({
      ...prev,
      current_class: { ...prev.current_class, name: classState },
    }));
    mutation.mutate({
      current_class: { ...student.current_class, name: classState },
    });
  }, [classState]);

  useEffect(() => {
    console.log(state);
    setStudent((prev) => ({ ...prev, state_of_origin: state }));
    mutation.mutate({ state_of_origin: state });
  }, [state]);


  useEffect(() => {
    console.log(genderState);
    setStudent((prev) => ({ ...prev, gender: genderState }));
    mutation.mutate({ gender: genderState });
  }, [genderState]);


  const uid = typeof window !== "undefined" && localStorage.getItem("schoolId");

  const { data: classesData } = useQuery({
    queryKey: [queryKeys.getStudents],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) }),
    enabled: !!uid,
  });

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(classesData?.data);
  }, [classesData]);

  const mappedClasses = classes?.map((cls) => {
    return {
      value: cls.name,
      label: cls.name,
    };
  });

  return (
    <Studentlayout>
    <div>
      {
        <div className=" flex flex-col w-full p-5 gap-5 max-w-5xl">
          <div className="flex justify-between items-center ">
            <div>
            <img src="/bestcollegelogo.png" alt="" className="w-16 h-16" />              
            </div>
            <div>{student.full_name}</div>
            <div>
            <div>
              <Imagelogic />
            </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <div className="  grid grid-cols-3 gap-5 w-full">
              <div>
              <div className="pb-2 "> First Name:</div>
              <div>
              <Input
                text={""}
                name={"first_name"}
                error={false}
                success={false}
                disabled={false}
                change={handleInputChange}
                value={student.first_name}
                className={" py-3 bg-white-200 text-center "}
                type={""}
              />
              </div>
              </div>

              <div>
              <div className="pb-2 "> Middle Name:</div>
              <div>
              <Input
                text={""}
                name={"middle_name"}
                error={false}
                success={false}
                disabled={false}
                change={handleInputChange}
                value={student.middle_name}
                className={" py-3 bg-white-200 text-center "}
                type={""}
            
              />
              </div>
              </div>
              <div>
              <div className="pb-2 "> Last Name:</div>
              <div>
              <Input
                text={""}
                name={"last_name"}
                error={false}
                success={false}
                disabled={false}
                change={handleInputChange}
                value={student.last_name}
                className={" py-3 bg-white-200 text-center "}
                type={""}
              />
              </div>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-10 items-center">
              <div>
                <div className=" pb-2">Gender:</div>
                <Select
                  options={Gender}
                  placeholder={student.gender}
                  change={undefined}
                  text="gender"
                  state={genderState}
                  setState={setGenderState}
                  name="gender"
                />
              </div>

              <div>
                <div className=" pb-2">Date Of Birth</div>
                <div>
                  <input
                    id="date_of_birth"
                    value={student.date_of_birth}
                    name="date_of_birth"
                    type="date"
                    autoComplete="date_of_birth"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none "
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <div className=" pb-2"> State Of Origin:</div>
                <div>
                  <Select
                    options={States}
                    placeholder={student.state_of_origin}
                    change={undefined}
                    text="state_of_origin"
                    state={state}
                    setState={setState}
                    name="state_of_origin"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <div className=" pb-2">Phone Number:</div>
                <div>
                  <input
                    id="Phone Number"
                    value={student.phone_number}
                    name="phone_number"
                    type="number"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Email Address: </div>
                <div>
                  <input
                    id="Email Adress"
                    value={student.email}
                    name="email"
                    type="email"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className=" pb-2"> Home Address</div>
              <Input
                text={""}
                name={"address"}
                error={false}
                success={false}
                disabled={false}
                change={handleInputChange}
                value={student.address}
                className={" py-3 bg-white-200 text-center "}
                type={""}
              />
            </div>

            <div className=" grid grid-cols-3 gap-10">
              <div>
                <div className=" pb-2">Class:</div>
                <div>
                  {/* <Input
                    text={""}
                    name={"current_class"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleClassChange}
                    value={
                       student.current_class?.name
                    }
                    className={" py-3 bg-white-200 text-center "}
                    type={""}
                  /> */}
                  {classes && (
                    <Select
                      text={""}
                      options={mappedClasses}
                      placeholder={student.current_class?.name}
                      change={undefined}
                      state={classState}
                      setState={setClassState}
                      name={"current_class"}
                    />
                  )}
                </div>
              </div>
              <div>
                <div className=" pb-2">Admission Status:</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 text-center "}
                    type={""}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Enrollment Date:</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 text-center"}
                    type={""}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className=" pb-2">Parent/Guardian Full Name:</div>
              <div>
                <Input
                  text={""}
                  name={"guardian_full_name"}
                  error={false}
                  success={false}
                  disabled={false}
                  change={handleInputChange}
                  value={student.guardian_full_name}
                  className={" py-3 bg-white-200 text-center"}
                  type={"text"}
                />
              </div>
            </div>

            <div className=" grid grid-cols-2 gap-10">
              <div>
                <div className=" pb-2">Parent/Guardian Phone Number:</div>
                <div>
                  <input
                    id="Phone Number"
                    value={student.phone_number2}
                    name="phone_number2"
                    type="number"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Parent/Guardian Email Address: </div>
                <div>
                  <input
                    id="Email Adress"
                    value={null}
                    name="email"
                    type="email"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" pb-2">Parent/Guardian Home Address:</div>
              <Input
                text={""}
                name={"address"}
                error={false}
                success={false}
                disabled={false}
                change={handleInputChange}
                value={student.address}
                className={" py-3 bg-white-200 text-center "}
                type={""}
              />
            </div>
          </div>
        </div>
      }
    </div>
    </ Studentlayout >
  );
}