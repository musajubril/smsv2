import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiPencilLine } from "react-icons/pi";

export default function studentPage() {
  return (
    <div className=" flex flex-col p-6">
      <div className=" flex justify-between items-center pb-5">
        <div className=" flex items-center gap-3 cursor-pointer">
          <div className="border border-[#E4E7EC] bg-white-100 py-1 px-2 rounded-lg">
            <FaArrowLeftLong />
          </div>
          <div className=" text-gray-400">Go Back</div>
          <div className=" text-gray-400">Dashboard /</div>
          <div className=" text-gray-400">Students /</div>
          <div>Jubril Musa</div>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-4 ">
        <div className=" col-span-1 border border-[#EDEDED] rounded-lg p-4 flex flex-col gap-3 shadow-lg h-fit">
          <div className=" flex justify-end pr-4">
            <div className="flex border items-center gap-2 px-2 py-1 border-teal-200 rounded-lg">
              <h1>Edit</h1>
              <PiPencilLine />
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            {/* <div className=" h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer">
              <IoPersonAdd />
            </div> */}
             <div className=" cursor-pointer">
            <img src="/Avatar.png" alt="" className="cursor-pointer pb-3" />
          </div>
            <div className=" text-center">
              <h1 className=" text-base  font-semibold">Jubril Musa</h1>
              <h1 className=" text-sm  font-normal text-[#878787]">ID:096475</h1>
            </div>
          </div>

          <div className=" grid grid-cols-2 pl-4">
            <div className=" flex flex-col justify-center ">
              <h1 className=" text-sm  font-normal text-[#878787]">Gender</h1>
              <h1 className=" text-base  font-semibold">Male</h1>
            </div>
            <div className=" flex flex-col justify-center ">
              <h1 className=" text-sm  font-normal text-[#878787]">
                Date of Birth
              </h1>
              <h1 className=" text-base  font-semibold">12/12/2012</h1>
            </div>
          </div>
          <div className="p-4">
            <h1 className=" text-sm  font-normal text-[#878787]">
              State Of Origin
            </h1>
            <h1 className=" text-base  font-semibold">Kano State</h1>
          </div>
        </div>

        <div className=" col-span-2 flex flex-col gap-5 px-4">
          <div className="flex flex-col gap-4 p-3 border border-[#EDEDED] rounded-lg ">
            <div className=" text-lg pl-4 font-normal text-[#878787]">Academic Information</div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Admission Status</h1>
                <h1 className=" text-base  font-semibold">Pending</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                  Class
                </h1>
                <h1 className=" text-base  font-semibold">SSS1</h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Enrollment Date</h1>
                <h1 className=" text-base  font-semibold">12/12/2012</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-3 gap-4 border border-[#EDEDED] rounded-lg ">
          <div className=" text-lg pl-4 font-semibold text-[#878787]">Contact Information</div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Phone Number</h1>
                <h1 className=" text-base  font-semibold">08066641969</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                  Email Address
                </h1>
                <h1 className=" text-base  font-semibold">Jubrilmusa@gmail.com</h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Home Address</h1>
                <h1 className=" text-base  font-semibold">10 Oggunno Street, Ajah, Lagos State</h1>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col p-3 gap-4 border border-[#EDEDED] rounded-lg ">
          <div className=" text-lg pl-4 font-semibold text-[#878787]">Parent Information</div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Parent/Guardian Name</h1>
                <h1 className=" text-base  font-semibold">Jubril Musa Sr</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                Parent/Guardian Phone Number
                </h1>
                <h1 className=" text-base  font-semibold">09066641969</h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Parent/Guardian Address</h1>
                <h1 className=" text-base  font-semibold">10 Oggunno Street, Ajah, Lagos State</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                Parent/Guardian Email address
                </h1>
                <h1 className=" text-base  font-semibold">JubrilmusaSr@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
