import React from "react";
import { HiDotsVertical } from "react-icons/hi";

export default function StudentProfile() {
  return (
    <div>
      <div className="  shadow  ">
        <div className=" grid grid-cols-4 text-sm bg-[#F5FAFF]  p-3  rounded-t-lg">
          <div className=" font-semibold text-xs flex gap-2 justify-center ">
            Class
          </div>
          <div className=" font-semibold text-xs flex justify-center ">Term</div>
          <div className=" font-semibold text-xs flex justify-center ">GPA</div>
          <div className=" font-semibold text-xs flex justify-center ">
            Action
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 px-3">
          <div className=" grid grid-cols-4 font-semibold text-sm ">
            <div className="  justify-center  flex items-center gap-3">
              Senior Secondary 1
            </div>
            <div className="flex justify-center ">
              <div className=" text-[#04326B] bg-[#E3EFFC] w-fit rounded-lg px-2">1st Term</div>
            </div>
            <div className="flex justify-center  ">87%</div>
            <div className=" flex  justify-center  items-center">
              <HiDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
