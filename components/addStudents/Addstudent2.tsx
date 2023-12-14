import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineImport } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import Button from "../shared/button/Button";
import Modal from "../shared/reusablemodal/Modal";
import ImportCSV from "./ImportCSV";
import Layout from "../shared/dashboardLayout/Layout";

export default function Addstudent2() {
  const [open, setOpen] = useState(Boolean);
  const action = () => {
    setOpen(false);
  };
  return (
    <Layout>
    <div className=" flex flex-col p-6">
      <div>
        <Modal action={action} open={open}>
          <ImportCSV />
        </Modal>
      </div>
      <div className=" flex justify-between items-center pb-5">
        <div className=" flex items-center gap-3 cursor-pointer">
          <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
            <FaArrowLeftLong />
          </div>
          <div>Go Back</div>
          <div className=" text-gray-400">Dashboard /</div>
          <div className=" text-gray-400">Students /</div>
          <div className=" ">Add New Student</div>
        </div>
        <div
          className=" flex p-2 border items-center gap-1 border-[#E4E7EC] bg-white-100 rounded-md cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <AiOutlineImport />
          <div>Import CSV</div>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-4 ">
        <div className=" col-span-2 border border-[#E4E7EC] bg-white-100 rounded-lg  p-4">
          <div className=" pb-4">
            <div className=" text-xl  font-semibold">Parent Information</div>
            <div className=" text-gray-400 text-sm">
              Fill out these details to add a new student
            </div>
          </div>
          <form className="flex flex-col gap-4 pt-3">
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Guardian/Parent's Name</h1>
              <Input
                size="large"
                text="Enter name"
                name="fname"
                disabled={false}
                success={null}
                error={null}
                change={null}
              />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Home Address</h1>
              <Input
                size="large"
                text="Enter Home Address"
                name="address"
                disabled={false}
                success={null}
                error={null}
                change={null}
              />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Guardian/Parent's Phone Number</h1>
              <Input
                size="large"
                text="Enter Phone Number"
                name="number"
                disabled={false}
                success={null}
                error={null}
                change={null}
              />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Guardian/Parent's Email address</h1>
              <Input
                size="large"
                text="Enter Email address"
                name="email"
                disabled={false}
                success={null}
                error={null}
                change={null}
              />
            </div>
            <div className=" grid grid-cols-2 gap-2">
              <Button
                intent="secondary"
                size="base"
                text="Back"
                disabled={false}
              />
              <Button
                intent="primary"
                size="base"
                text="Next Step"
                disabled={false}
              />
            </div>
          </form>
        </div>

        <div className=" col-span-1 border border-[#E4E7EC] bg-white-100 rounded-lg p-3 flex flex-col gap-4">
          <div className=" flex gap-2 items-center">
            <div className=" h-10 w-10 bg-blue-100 rounded-full flex justify-center items-center text-lg text-white-100 font-semibold">
            <FaCheck />
            </div>
            <div>
              <h1 className=" font-medium text-lg">Personal Information</h1>
              <h1 className=" text-gray-400 text-sm">
                Fill out student details
              </h1>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <div className=" h-10 w-10  border-gray-400  rounded-full flex justify-center items-center text-lg font-semibold bg-blue-100 text-white-100 ">
              2
            </div>
            <div>
              <h1 className=" font-medium text-lg ">Parent Information</h1>
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
    </Layout>
  );
}
