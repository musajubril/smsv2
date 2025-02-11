import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineImport } from "react-icons/ai";
import { IoPersonAdd } from "react-icons/io5";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import Button from "../shared/button/Button";
import { SignUpState } from "@/pages/[school]/admin/student/add";
import Steps from "../shared/StepNavigation/Steps";
import Imagelogic from "../shared/imagelogic";
import Modal from "../shared/reusablemodal/Modal";
import ImportCSV from "./ImportCSV";
import Layout from "../shared/dashboardLayout/Layout";
import statesInNigeria from "../stateInNigeria";

export const dateFormat = (dt) => {
  let date = new Date(dt);
  console.log(dt, date);
  const returnDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  console.log(returnDate);
  return returnDate;
};
export default function Addstudent1({
  next,
  change,
  state,
  setState,
  open: showCSVPreview,
  setOpen: setShowCSVPreview,
}: {
  next: any;
  change: any;
  state: SignUpState;
  setState: any;
  open: boolean;
  setOpen: any;
}) {
  // const Gender = ["Male", "Female"];
  // const Religion = ["Christianity", "Islam"];
  const States = statesInNigeria;

  const Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const Religion = [
    { value: "Christianity", label: "Christianity" },
    { value: "Islam", label: "Islam" },
  ];

  const [open, setOpen] = useState(Boolean);
  const action = () => {
    setOpen(false);
  };

  return (
    <div className=" flex flex-col p-6">
      {/* <div className="">
        <Modal action={action} open={open}>
          <ImportCSV showCSVPreview={showCSVPreview} setShowCSVPreview={setShowCSVPreview}/>
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
      </div> */}

      <div className=" grid grid-cols-3 gap-4 ">
        <div className=" col-span-2 border border-[#E4E7EC] bg-white-100 rounded-lg p-4">
          <div className=" pb-4">
            <div className=" text-xl  font-semibold">Add New Student</div>
            <div className=" text-gray-400 text-sm">
              Fill out these details to add a new student
            </div>
          </div>
          <div>
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
              <h1 className=" font-medium">Middle Name</h1>
              <Input
                size="large"
                text="Enter middle name"
                name="middle_name"
                disabled={false}
                success={null}
                error={null}
                change={change}
                value={state.middle_name}
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
                change={change}
                value={state.last_name}
              />
            </div>
            <div className=" grid grid-cols-2 gap-2">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Gender</h1>
                <Select
                  options={Gender}
                  placeholder="Select Gender"
                  change={change}
                  text="gender"
                  state={state}
                  setState={setState}
                  name="gender"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Date Of Birth</h1>
                <input
                  type="date"
                  name="date_of_birth"
                  className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300 "
                  value={state.date_of_birth?.toDateString()}
                  onChange={(e: any) =>
                    setState({ ...state, date_of_birth: e.target.value })
                  }
                />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Religion</h1>
              <Select
                options={Religion}
                placeholder="Select a Religion"
                change={change}
                text="religion"
                state={state}
                setState={setState}
                name="religion"
              />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">State Of Origin</h1>
              <Select
                options={States}
                placeholder="Select a State"
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

        <div className=" rounded-lg col-span-1  bg-white-100  p-3 flex flex-col gap-4">
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
              <h1 className=" font-medium text-lg text-gray-400">
                Parent Information
              </h1>
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
              <h1 className=" font-medium text-lg text-gray-400">
                Academic Information
              </h1>
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
