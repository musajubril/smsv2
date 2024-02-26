import React from "react";
import Pagination from "@/components/shared/Pagination";
import { HiDotsVertical } from "react-icons/hi";

export default function QuestionsList() {
  return (
    <div>
      <div>
        <div className=" my-6 rounded-lg shadow-lg">
          <div className=" grid grid-cols-6 text-sm bg-[#F5FAFF] p-3  rounded-t-lg">
            <div className=" font-semibold text-xs flex gap-2 ">
              <input type="checkbox" name="" id="" className=" h-5 w-5" />
              Topic
            </div>
            <div className=" font-semibold text-xs col-span-1">
              No. of Questions
            </div>
            <div className=" font-semibold text-xs col-span-1">Class</div>
            <div className=" font-semibold text-xs col-span-1">Subject</div>
            <div className=" font-semibold text-xs col-span-1">Term</div>
            <div className=" font-semibold text-xs col-span-1 flex justify-center">
              Action
            </div>
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            <div className=" grid grid-cols-6 font-semibold text-sm ">
              <div className="  flex items-center gap-3">
                <div className="">
                  <input type="checkbox" name="" id="" className=" h-5 w-5" />
                </div>
                <div className="">
                  <p>Geometry</p>
                </div>
              </div>
              <div className="col-span-1 text-gray-300 font-normal text-sm">25</div>
              <div className={`col-span-1 w-fit rounded-lg h-fit px-3 bg-[#E3EFFC] text-[#04326B] font-medium text-sm`}>JSS 1</div>
              <div className="col-span-1 text-gray-300 font-normal text-sm">
                Mathematics
              </div>
              <div className="col-span-1 text-gray-300 font-normal text-sm">First</div>
              <div className=" cursor-pointer flex justify-center">
                <HiDotsVertical />
              </div>
            </div>
          </div>
        </div>

        <Pagination paginate={undefined} count={undefined}></Pagination>
      </div>
    </div>
  );
}
