import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'



interface Props {
    studentName: any;
    studentPin: any;
  }

  const slug: any = typeof window !== "undefined" && localStorage.getItem("schoolSlug");


export default function Pincard({ studentName, studentPin} : Props) {
  return (
    <div>
      <div className=" h-full w-full border border-[#C2E2FF] rounded-lg shadow-md">
        <div className=" flex justify-between p-4 rounded-lg bg-blue-700">
          <div className=" flex flex-col gap-2">
            <div className=" cursor-pointer font-medium text-base text-gray-100">
           {studentName}
            </div>
            <div className=" cursor-pointer font-normal text-base text-gray-200">
        PIN: {studentPin}
            </div>
            <div className=" cursor-pointer font-normal text-xs text-gray-200">
        {`To check results go to http://www.${slug}.com/resultLogin`}
            </div>
          </div>
          {/* <div className=" text-gray-200 text-2xl cursor-pointer">
            <HiDotsVertical />
          </div> */}
        </div>
      </div>
    </div>
  )
}
