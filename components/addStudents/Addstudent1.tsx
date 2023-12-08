import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineImport } from "react-icons/ai";
import { IoPersonAdd } from "react-icons/io5";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import Button from "../shared/button/Button";

export default function Addstudent1() {
  const Gender = ["Male", "Female"];
  const Religion = ["Christian", "Muslim", "Others"];
  return (
    <div className=" flex flex-col p-6">
      <div className=" flex justify-between items-center pb-5">
        <div className=" flex items-center gap-3 cursor-pointer">
          <div className="border py-1 px-2">
            <FaArrowLeftLong />
          </div>
          <div>Go Back</div>
          <div className=" text-gray-400">Dashboard /</div>
          <div className=" text-gray-400">Students /</div>
          <div className=" text-gray-400">Add New Student</div>
        </div>
        <div className=" flex p-2 border items-center gap-1 ">
          <AiOutlineImport />
          <div>Import CSV</div>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-4 ">
        <div className=" col-span-2 border border-gray-500 rounded-lg p-4">
          <div className=" pb-4">
            <div className=" text-xl  font-semibold">Add New Student</div>
            <div className=" text-gray-400 text-sm">
              Fill out these details to add a new student
            </div>
          </div>
          <div className=" h-14 w-14 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer">
            <IoPersonAdd />
          </div>
          <form className="flex flex-col gap-3 pt-3">
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">First Name</h1>
              <Input
                size="large"
                text="Enter first name"
                name="fname"
                disabled={false}
                success={null}
                error={null}
                change={null}
              />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Last Name</h1>
              <Input
                size="large"
                text="Enter last name"
                name="lname"
                disabled={false}
                success={null}
                error={null}
                change={null}
              />
            </div>
            <div className=" grid grid-cols-2 gap-2">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Gender</h1>
                <Select options={Gender} placeholder="Select Gender" />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Date Of Birth</h1>
                <input
                  type="date"
                  name="DOB"
                  className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300 "
                />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Religion</h1>
              <Select options={Religion} placeholder="Select a Religion" />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">State Of Origin</h1>
              <Select options={Religion} placeholder="Select a State" />
            </div>
            <div>
              <Button
                intent="primary"
                size="base"
                text="Next"
                disabled={false}
              />
            </div>
          </form>
        </div>

        <div className=" col-span-1 border border-gray-500 rounded-lg p-3 flex flex-col gap-4">
          <div className=" flex gap-2 items-center">
            <div className=" h-10 w-10 bg-blue-100 rounded-full flex justify-center items-center text-lg text-white-100 font-semibold">
              1
            </div>
            <div>
              <h1 className=" font-medium text-lg">Personal Information</h1>
              <h1 className=" text-gray-400 text-sm">
                Fill out student details
              </h1>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <div className=" h-10 w-10 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center text-lg font-semibold">
              2
            </div>
            <div>
              <h1 className=" font-medium text-lg text-gray-400">Parent Information</h1>
              <h1 className=" text-gray-400 text-sm">
                Fill out parent details
              </h1>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <div className=" h-10 w-10 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center text-lg font-semibold">
              3
            </div>
            <div className="">
              <h1 className=" font-medium text-lg text-gray-400">Academic Information</h1>
              <h1 className=" text-gray-400 text-sm">
                Fill out academic details
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
