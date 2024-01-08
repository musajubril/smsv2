import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Select from "../shared/select/Select";
import Button from "../shared/button/Button";
import { FaCheck } from "react-icons/fa6";
import Layout from "../shared/dashboardLayout/Layout";
import Modal from "../shared/reusablemodal/Modal";
import ProfilePreview from "./ProfilePreview";
import { AddStaffState } from "@/pages/[school]/staff/add";

export default function AddStaff2({prev, submit, state, change, setState}: {prev:any, submit:any, state:AddStaffState, setState:any, change:any}) {
  const Qualification = ["BSC", "HND", "ND", "NCE"];
  const Role = ["Teacher", "Cleaner", "Principal"];
  const Department = ["Academics", "Cleaning"];
  const Class = ["Jss1", "Jss2", "Jss3"];
  const Subject = ["Maths", "English", "Yoruba", "Physics"];

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openProfilePreview = () => {
    setIsModalOpen(true);
  };

  const closeProfilePreview = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openProfilePreview(); // Open the modal on form submission
  };

  return (
    <div className="">
      <Layout>
        <Modal action={closeProfilePreview} open={isModalOpen}>
          <ProfilePreview />
        </Modal>
        <div className="flex flex-col pt-6 ">
          <div className="flex pb-5 gap-2 cursor-pointer p-0">
            <div className="">
              <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
                <FaArrowLeftLong />
              </div>
            </div>
            <div className="">Go Back</div>
            <div className="text-gray-400">DashBoard /</div>
            <div className="text-gray-400">Staff /</div>
            <div className="">Add New Staff</div>
          </div>

          <div className=" grid grid-cols-3 gap-4 ">
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
                    placeholder="Select department" change={change} text="department" state={state} setState={setState} name="department" 
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Qualification</h1>
                  <Select
                    options={Qualification}
                    placeholder="Select qualification" change={change} text="qualification" state={state} setState={setState} name="qualification" 
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Role</h1>
                  <Select options={Role} placeholder="Select role" change={change} text="role" state={state} setState={setState} name="role" />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Class</h1>
                  <Select options={Class} placeholder="Select class" change={change} text="class" state={state} setState={setState} name="class"  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h1 className=" font-medium">Subject</h1>
                  <Select options={Subject} placeholder="Select subject" change={change} text="subject" state={state} setState={setState} name="subject" />
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

            <div className=" col-span-1 border border-[#E4E7EC] bg-white-100 rounded-lg p-3 flex flex-col gap-4">
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
