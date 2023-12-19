import Layout from "@/components/shared/dashboardLayout/Layout";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiPencilLine } from "react-icons/pi";

export default function studentPage() {
  return (
    <Layout>
      <div className=" flex flex-col p-6">
        <div className=" flex justify-between items-center pb-5">
          <div className=" flex items-center gap-3 cursor-pointer">
            <div className="border border-[#E4E7EC] bg-white-100 py-1 px-2 rounded-lg">
              <FaArrowLeftLong />
            </div>
            <div className=" text-gray-400">Go Back</div>
            <div className=" text-gray-400">Dashboard /</div>
            <div className=" text-gray-400">Staff /</div>
            <div>Musa Kalamu</div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-4  ">
          <div className=" col-span-1 border border-[#EDEDED] rounded-lg p-4 flex flex-col gap-3 shadow-lg  h-fit w-auto">
            <div className=" flex justify-end pr-4">
              <div className="flex border items-center gap-2 px-2 py-1 border-teal-200 rounded-lg">
                <h1>Edit</h1>
                <PiPencilLine />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" cursor-pointer">
                <img src="/Avatar.png" alt="" className="cursor-pointer pb-3" />
              </div>
              <div className=" text-center">
                <h1 className=" text-base  font-semibold">Jones Amalya</h1>
                <h1 className=" text-sm  font-normal text-[#878787]">
                  ID:123456
                </h1>
              </div>
            </div>

            <div className=" grid grid-cols-2 pl-6">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-normal text-[#878787]">Gender</h1>
                <h1 className=" text-base  font-semibold">Male</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-normal text-[#878787]">
                  Qualification
                </h1>
                <h1 className=" text-base  font-semibold">ND, Bsc</h1>
              </div>
            </div>
          </div>

          <div className=" col-span-2 flex flex-col gap-5 px-4">
            <div className="flex flex-col gap-4 p-3 border border-[#EDEDED] rounded-lg ">
              <div className=" text-lg pl-4 font-normal text-[#878787]">
                Contact Information
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Phone Number
                  </h1>
                  <h1 className=" text-base  font-semibold">08062850014</h1>
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Email Address
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    Example@gmail.com
                  </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Home address
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    10 Oggunno Street, Ajah, Lagos state
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4 border border-[#EDEDED] rounded-lg ">
              <div className=" text-lg pl-4 font-semibold text-[#878787]">
                Role Information
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Deparment
                  </h1>
                  <h1 className=" text-base  font-semibold">Academics</h1>
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Class[es]
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    Jss1, Jss2, Jss3
                  </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Qualification
                  </h1>
                  <h1 className=" text-base  font-semibold">ND, Bsc</h1>
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Subjects
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    Mathematics, Basic Technology
                  </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Role
                  </h1>
                  <h1 className=" text-base  font-semibold">Teacher</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
}
