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

import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";



export default function Profilepage () {
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
      toast.success(data?.message);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    mutation.mutate({ [name]: value });
  };

  useEffect(() => {
    if (classState) {
      setStudent((prev) => ({
        ...prev,
        current_class: { ...prev.current_class, name: classState },
      }));
      mutation.mutate({
        current_class: { ...student.current_class, name: classState },
      });
    }
  }, [classState]);

  useEffect(() => {
    if (state) {
      setStudent((prev) => ({ ...prev, state_of_origin: state }));
      mutation.mutate({ state_of_origin: state });
    }
  }, [state]);

  useEffect(() => {
    if (genderState) {
      setStudent((prev) => ({ ...prev, gender: genderState }));
      mutation.mutate({ gender: genderState });
    }
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
    <div>
        
      <div className=" justify-center flex  w-full">
        {
          <div className=" flex flex-col w-full px-4 gap-3 max-w-3xl ">
            <div className=" md:grid grid-cols-3 items-center text-center gap-5  w-full ">
              <div>
                <img
                  src="/bestcollegelogo.png"
                  alt=""
                  className=" hidden md:flex w-20 h-20"
                />
              </div>
              <div className=" font-medium text-base md:text-xl">
                {student.full_name}
              </div>
              <div className=" hidden md:flex justify-end">
                <img 
                src={student.image} 
                alt="" 
                className='h-16 w-16 flex justify-center items-center rounded-full'
                />

              </div>
            </div>
            <div className=" grid md:grid-cols-2 gap-6 py-3">
              <div>
                <div className="pb-2 "> First Name</div>
                <div>
                  <Input
                    text={""}
                    name={"first_name"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={student.first_name}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className="pb-2 "> Middle Name</div>
                <div>
                  <Input
                    text={""}
                    name={"middle_name"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={student.middle_name}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className="pb-2 "> Last Name</div>
                <div>
                  <Input
                    text={""}
                    name={"last_name"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={student.last_name}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>

              <div>
                <div className=" pb-2">Email Address </div>
                <div>
                  <input
                    id="Email Adress"
                    value={student.email}
                    name="email"
                    type="email"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Phone Number</div>
                <div>
                  <input
                    id="Phone Number"
                    value={student.phone_number}
                    name="phone_number"
                    type="number"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Gender</div>
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
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2"> State Of Origin</div>
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
              <div>
                <div className=" pb-2"> Home Address</div>
                <div>
                  <Input
                    text={""}
                    name={"address"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={student.address}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Class</div>
                <div>
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
                <div className=" pb-2">Admission Status</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Enrollment Date</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 pl-3"}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Parent/Guardian Full Name</div>
                <div>
                  <Input
                    text={""}
                    name={"guardian_full_name"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={student.guardian_full_name}
                    className={" py-3 bg-white-200 pl-3"}
                    type={"text"}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Parent/Guardian Phone Number</div>
                <div>
                  <input
                    id="Phone Number"
                    value={student.phone_number2}
                    name="phone_number2"
                    type="number"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Parent/Guardian Email Address </div>
                <div>
                  <input
                    id="Email Adress"
                    value={null}
                    name="email"
                    type="email"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Parent/Guardian Home Address</div>
                <div>
                  <Input
                    text={""}
                    name={"address"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={student.address}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      </div>
  );
}
