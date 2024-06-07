import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Select from "../shared/select/Select";
import Button from "../shared/button/Button";
import { FaCheck } from "react-icons/fa6";
import Layout from "../shared/dashboardLayout/Layout";
import Modal from "../shared/reusablemodal/Modal";
import ProfilePreview from "./ProfilePreview";
import { AddStaffState } from "@/pages/[school]/admin/staff/add";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKey";
import { getRequest } from "@/api/apiCall";
import { GET_COURSES, HOMEROOMS } from "@/api/apiUrl";

export default function AddStaff2({
  prev,
  submit,
  state,
  change,
  setState,
}: {
  prev: any;
  submit: any;
  state: AddStaffState;
  setState: any;
  change: any;
}) {
  const Qualification = [
    { value: "BSC", label: "BSC" },
    { value: "HND", label: "HND" },
    { value: "ND", label: "ND" },
    { value: "NCE", label: "NCE" },
  ];

  const Role = [
    { value: "Teacher", label: "Teacher" },
    { value: "Cleaner", label: "Cleaner" },
    { value: "Principal", label: "Principal" },
  ];

  const Department = [
    { value: "Academics", label: "Academics" },
    { value: "Cleaning", label: "Cleaning" },
  ];

  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");
  const { data: classData } = useQuery({
    queryKey: [queryKeys.getclass],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) }),
  });

  console.log(classData);

  const [classes, setclasses] = useState([]);
  useEffect(() => {
    setclasses(classData?.data);
  }, [classData]);

  console.log(classes);

  const mappedClasses = classes?.map((cla) => {
    return {
      value: cla.id,
      label: cla.name,
    };
  });

  const [courses, setCourses] = React.useState([]);
  const { data: courseData } = useQuery({
    queryKey: [queryKeys.getcourse],
    queryFn: async () => await getRequest({ url: GET_COURSES(uid) }),
  });

  React.useEffect(() => {
    setCourses(courseData?.data);
  }, [courseData]);

  console.log(courses);

  const mappedSubjects = courses?.map((cou) => {
    return {
      value: cou.id,
      label: cou.name,
    };
  });

  const Subject = ["Maths", "English", "Yoruba", "Physics"];

  const router = useRouter();
  let school;
  if (typeof window !== "undefined") {
    school = localStorage.getItem("schoolSlug");
  }
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openProfilePreview = () => {
    setIsModalOpen(true);
  };

  const closeProfilePreview = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openProfilePreview(); 
  };

  return (
    <div className="">
      <Layout>
        <Modal action={closeProfilePreview} open={isModalOpen}>
          <ProfilePreview />
        </Modal>
        <div className="flex flex-col pt-6 ">
          <div className="flex pb-5 gap-2 cursor-pointer p-0 max-sm:hidden">
            <div
              onClick={router.back}
              className=" flex items-center gap-3 cursor-pointer"
            >
              <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
                <FaArrowLeftLong />
              </div>
              <div>Go Back</div>
            </div>
            <Link
              href={`/${school}/`}
              className="text-gray-400 hover:text-black"
            >
              DashBoard /
            </Link>
            <div
              className="text-gray-400 hover:text-black"
              onClick={router.back}
            >
              Staff /
            </div>
            <div className="">Add New Staff</div>
          </div>

          <div className=" grid md:grid-cols-3 gap-4 ">
            <div className=" col-span-2 border border-[#E4E7EC] bg-white-100 rounded-lg p-4">
              <div className=" pb-4">
                <div className=" text-xl  font-semibold">Add New Staff</div>
                <div className=" text-gray-400 text-sm">
                  Fill out these details to add a new staff
                </div>
              </div>
              <form
                className="flex flex-col gap-3 pt-3"
                onSubmit={handleSubmit}
              >
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Department</h1>
                  <Select
                    options={Department}
                    placeholder="Select department"
                    change={change}
                    text="department"
                    state={state}
                    setState={setState}
                    name="department"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Qualification</h1>
                  <Select
                    options={Qualification}
                    placeholder="Select qualification"
                    change={change}
                    text="qualification"
                    state={state}
                    setState={setState}
                    name="qualification"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Role</h1>
                  <Select
                    options={Role}
                    placeholder="Select role"
                    change={change}
                    text="role"
                    state={state}
                    setState={setState}
                    name="role"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Class</h1>
                  {classes && (
                    <Select
                      options={mappedClasses}
                      placeholder="Select class"
                      change={change}
                      text="class"
                      state={state}
                      setState={setState}
                      name="class"
                    />
                  )}
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Subject</h1>
                  {courses && (
                    <Select
                      options={mappedSubjects}
                      placeholder="Select subject"
                      change={change}
                      text="subject"
                      state={state}
                      setState={setState}
                      name="subject"
                    />
                  )}
                </div>
                <div className=" grid grid-cols-2 gap-2">
                  <Button
                    intent="secondary"
                    size="base"
                    text="Back"
                    disabled={false}
                    onClick={prev}
                  />
                  <Button
                    intent="primary"
                    size="base"
                    text="Next"
                    disabled={false}
                    onClick={submit}
                  />
                </div>
              </form>
            </div>

            <div className=" col-span-1 border border-[#E4E7EC] bg-white-100 rounded-lg p-3 flex flex-col gap-4 max-sm:hidden">
              <div className=" flex gap-2 items-center">
                <div className=" h-10 w-10 bg-blue-100 rounded-full flex justify-center items-center text-lg text-white-100 font-semibold">
                  <FaCheck />
                </div>
                <div>
                  <h1 className=" font-medium text-lg">Personal Information</h1>
                  <h1 className=" text-gray-400 text-xs">
                    Fill out student details
                  </h1>
                </div>
              </div>
              <div className=" flex gap-2 items-center">
                <div className=" h-10 w-10  bg-blue-100 text-white-100 rounded-full flex justify-center items-center text-lg font-semibold">
                  2
                </div>
                <div>
                  <h1 className=" font-medium text-lg text-gray-400">
                    Role Details
                  </h1>
                  <h1 className=" text-gray-400 text-xs">
                    Enter the basic information about the role.
                  </h1>
                </div>
              </div>
              <div className=" flex gap-2 items-center">
                <div className=" h-10 w-10 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center text-lg font-semibold">
                  3
                </div>
                <div>
                  <h1 className=" font-medium text-lg text-gray-400">
                    Preview
                  </h1>
                  <h1 className=" text-gray-400 text-xs">
                    Confirm if the details you inputed is correct
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
