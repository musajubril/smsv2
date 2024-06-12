import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import Imagelogic from "../shared/imagelogic";
import Select from "../shared/select/Select";
import Layout from "../shared/dashboardLayout/Layout";
import { AddStaffState } from "@/pages/[school]/admin/staff/add";
import { useRouter } from "next/router";
import Link from "next/link";
import statesInNigeria from "../stateInNigeria";


export default function AddStaff1({
  next,
  state,
  change,
  setState,
}: {
  next: any;
  state: AddStaffState;
  change: any;
  setState: any;
}) {
  const router = useRouter();
  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('schoolSlug');
  }


  const  Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];
 
  const States = statesInNigeria.map((stateName) => stateName);

  return (
    <Layout>
      <div className="flex flex-col pt-6 ">
        <div className="flex pb-5 gap-2 cursor-pointer max-sm:hidden">
          <div onClick={router.back} className="flex items-center gap-3 cursor-pointer">
            <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
              <FaArrowLeftLong />
            </div>
            <div className="">Go Back</div>
          </div>
          <Link href={`/${school}/`} className="text-gray-400 hover:text-black">DashBoard /</Link>
          <div className="text-gray-400 hover:text-black" onClick={router.back}>Staff /</div>
          <div className="">Add New Staff</div>
        </div>

        <div className=" grid md:grid-cols-3 gap-4  ">
          <div className=" col-span-2 border border-[#E4E7EC] bg-white-100 rounded-lg p-4">
            <div className=" pb-4">
              <div className=" text-xl  font-semibold">Add New Staff</div>
              <div className=" text-gray-400 text-sm">
                Fill out these details to add a new staff
              </div>
              <Imagelogic />
            </div>
            <form className="flex flex-col gap-3 pt-3">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">First Name</h1>
                <Input
                  size="large"
                  text="Enter first name"
                  name="first_name"
                  disabled={false}
                  success={null}
                  error={null}
                  change={change}
                  value={state.first_name}
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Last Name</h1>
                <Input
                  size="large"
                  text="Enter last name"
                  name="last_name"
                  disabled={false}
                  success={null}
                  error={null}
                  value={state.last_name}
                  change={change}
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Gender</h1>
                <Select
                  options={Gender}
                  placeholder="Select gender"
                  change={change}
                  text="gender"
                  state={state}
                  setState={setState}
                  name="gender"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Email Address</h1>
                <Input
                  size="large"
                  text="Enter email address"
                  name="email"
                  disabled={false}
                  success={null}
                  error={null}
                  change={change}
                  value={state.email}
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Phone Number</h1>
                <Input
                  size="large"
                  text="Enter phone number"
                  name="phone_number"
                  disabled={false}
                  success={null}
                  error={null}
                  change={change}
                  value={state.phone_number}
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Home Address</h1>
                <Input
                  size="large"
                  text="Enter home address"
                  name="address"
                  disabled={false}
                  success={null}
                  error={null}
                  change={change}
                  value={state.address}
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">State</h1>
                <Select
                  options={States}
                  placeholder="Select state"
                  change={change}
                  text="state_of_origin"
                  state={state}
                  setState={setState}
                  name="state_of_origin"
                />
              </div>
              <div>
                <Button
                  intent="primary"
                  size="base"
                  text="Next"
                  disabled={false}
                  onClick={next}
                />
              </div>
            </form>
          </div>

          <div className=" rounded-lg col-span-1 bg-white-100 p-3 hidden sm:flex flex-col gap-4">
            <div className=" flex gap-2 items-center">
              <div className=" h-10 w-10 bg-blue-100 rounded-full flex justify-center items-center text-lg text-white-100 font-semibold">
                1
              </div>
              <div>
                <h1 className=" font-medium text-lg">Personal Information</h1>
                <h1 className=" text-gray-400 text-xs">
                  Enter staff personal information
                </h1>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" h-10 w-10 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center text-lg font-semibold">
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
                <h1 className=" font-medium text-lg text-gray-400">Preview</h1>
                <h1 className=" text-gray-400 text-xs">
                  Confirm if the details you inputed is correct
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
