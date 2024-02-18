import React from "react";
import { HiDotsVertical } from "react-icons/hi";

export default function Subjectcard() {
  return (
    <div>
      <div className=" h-full w-full border border-[#C2E2FF] rounded-lg shadow-lg">
        <div className=" p-5 flex justify-center items-center">
          <div className=" h-52 w-full rounded-md bg-gray-600 "></div>
        </div>

        <div className=" flex justify-between p-4 rounded-b-lg bg-blue-700">
          <div className=" flex flex-col gap-2">
            <div className=" font-medium text-xl text-gray-100">
              Title of document
            </div>
            <div className=" font-normal text-xs text-gray-200">
              43 Questions
            </div>
            <div className=" font-normal text-xs text-gray-200">
              November 15, 2023 12:25 PM
            </div>
          </div>
          <div className=" text-gray-200 text-2xl">
            <HiDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
