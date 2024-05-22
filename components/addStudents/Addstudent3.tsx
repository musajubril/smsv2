import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineImport } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import Button from "../shared/button/Button";
import { SignUpState } from "@/pages/[school]/admin/student/add";
import Modal from "../shared/reusablemodal/Modal";
import ImportCSV from "./ImportCSV";
import Layout from "../shared/dashboardLayout/Layout";
import Studentpreview from "./Studentpreview";

export default function Addstudent3({ prev, change, state, setState, submit, open: showCSVPreview, setOpen: setShowCSVPreview}:{prev: any, submit: any, change: any, state:SignUpState, setState: any,  open: boolean, setOpen: any}) {


  const mock = ["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"];

  const status = ["Admitted", "Pending"];

  const [open, setOpen] = useState(Boolean);
  const action = () => {
    setOpen(false)
  };

  const [open1, setOpen1] = useState(Boolean);
  const action1 = () => {
    setOpen1(false)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(showCSVPreview)
  return (


    <div className="">
        
      <div className="">
        <Modal action={action} open={open}>
          <Studentpreview />
        </Modal>
      </div>

      <div className="">
        <Modal action={action1} open={open1}>
          <ImportCSV showCSVPreview={showCSVPreview} setShowCSVPreview={setShowCSVPreview}/>
        </Modal>

      </div>

      <div className=" flex flex-col p-6">
        <div className=" flex justify-between items-center">
          {/* <div className=" flex items-center gap-3 cursor-pointer">
            <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
              <FaArrowLeftLong />
            </div>
            <div>Go Back</div>
            <div className=" text-gray-400">Dashboard /</div>
            <div className=" text-gray-400">Students /</div>
            <div className=" ">Add New Student</div>
          </div> */}

          {/* <form className="flex flex-col gap-4 pt-3">
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Academic Status</h1>
              <Select options={status} placeholder="Select Status" />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Class</h1>
              <Select options={mock} placeholder="Select Class" />
            </div>
            <div className=" flex flex-col gap-1">
              <h1 className=" font-medium">Enrollment Date</h1>
              <input
                type="date"
                name="enrollment_date"
                className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300" selected={state.enrollment_date} onChange={(date: any)=>setState({...state, enrollment_date: date})}
              />
            </div>
            <div className=" flex flex-col gap-1">
              <div className="flex gap-1">
                <h1 className=" font-medium">Students Email address</h1>
                <h1 className=" font-normal text-gray-500">(optional)</h1>
              </div>
              <Input
                size="large"
                text="Enter Email address"
                name="student_email"
                disabled={false}
                success={null}
                error={null}
                change={change}
                value={state.student_email}
              />
            </div>
            <div className=" grid grid-cols-2 gap-2">
              <Button
                intent="secondary"
                size="base"
                text="Back"
                disabled={false} onClick={prev}
              />
              <Button
                intent="primary"
                size="base"
                text="Preview"
                disabled={false} 
                onClick={submit}
              />
            </div>
          </form> */}
{/* 
          <div
          className=" flex p-2 border items-center gap-1 border-[#E4E7EC] bg-white-100 rounded-md cursor-pointer"
          onClick={() => {
            setOpen1(true);
          }}
        >
          <AiOutlineImport />
          <div>Import CSV</div>
        </div> */}

        </div>

        <div className=" grid grid-cols-3 gap-4 ">
          <div className=" col-span-2 border border-[#E4E7EC] bg-white-100 rounded-lg p-4">
            <div className=" pb-4">
              <div className=" text-xl  font-semibold">
                Academic Information
              </div>
              <div className=" text-gray-400 text-sm">
                Fill out these details to add a new student
              </div>
            </div>
            <form className="flex flex-col gap-4 pt-3" onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Academic Status</h1>
                <Select options={status} placeholder="Select Status" state={state} setState={setState} text="status" name="status" change={change} />
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Class</h1>
                <Select options={mock} placeholder="Select Class" state={state} setState={setState} text="class" name="class_id" change={change} />
              </div>
              {/* <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Enrollment Date</h1>
                <input
                  type="date"
                  name="DOB"
                  className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300 "
                />
              </div> */}
              <div className=" flex flex-col gap-1">
                <h1 className=" font-medium">Enrollment Date</h1>
                <input
                  type="date"
                  name="enrollment_date"
                  className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300 " value={state.enrollment_date} onChange={(e: any)=>setState({...state, enrollment_date: e.target.value})}
                />
              </div>
              <div className=" flex flex-col gap-1">
                <div className="flex gap-1">
                  <h1 className=" font-medium">Students Email address</h1>
                  <h1 className=" font-normal text-gray-500">(optional)</h1>
                </div>
                <Input
                    size="large"
                    text="Enter Email address"
                    name="student_email"
                    disabled={false}
                    success={null}
                    error={null}
                    change={change} 
                    value={state.student_email}                />
              </div>
              <div className=" grid grid-cols-2 gap-2">
                <div>
                  <Button
                    intent="secondary"
                    size="base"
                    text="Back"
                    disabled={false}
                    onClick={prev}
                  />
                </div>
                <div 
                  // onClick={() => {
                  //   setOpen(true);
                  // }}
                  >
                  <Button
                    intent="primary"
                    size="base"
                    text="Preview"
                    disabled={false}
                    onClick={submit}
                  />
                </div>
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
                <FaCheck />
              </div>
              <div>
                <h1 className=" font-medium text-lg ">Parent Information</h1>
                <h1 className=" text-gray-400 text-sm">
                  Fill out parent details
                </h1>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" h-10 w-10  bg-blue-100 text-white-100 rounded-full flex justify-center items-center text-lg font-semibold">
                3
              </div>
              <div className="">
                <h1 className=" font-medium text-lg ">Academic Information</h1>
                <h1 className=" text-gray-400 text-sm">
                  Fill out academic details
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
