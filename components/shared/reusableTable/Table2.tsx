import Link from "next/link";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";

export default function Table2({
  students,
  hasCheckBox


}) {
  if (!students || students.length === 0) {
    return;
  }

  const keys = Object.keys(students[0]);
  const key_length = keys.length + 1;
  //   console.log(keys);
  //   console.log(key_length);

  return (
    <div>
      <div className=" ">
        <div className=" my-6 rounded-lg shadow-lg">
          <div
            className={` grid grid-cols-5  text-sm bg-[#F5FAFF] p-3 rounded-t-lg`}
          >
            {keys.map((key, index) => (
              <div className={` font-semibold text-xs flex ${key != "Name" ? "" : "col-span-2"}`} key={index}>
                   <div
                      className={` ${key != "Subject" ? "hidden" : "block"} ${
                        hasCheckBox ? "block" : "hidden"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mr-2 h-[18px] w-[18px]"
                      />
                    </div>
                {key}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 py-3 px-3 ">
            {students.map((pupil, pupilIndex) => (
              <div
                key={pupilIndex}
                className={`grid grid-cols-5 gap-3`}
              >
                {keys.map((key, keyIndex) => (
                  <div className={`flex items-center gap-2`} key={keyIndex}>
                      <div
                      className={` ${key != "Subject" ? "hidden" : "block"} ${
                        hasCheckBox ? "block" : "hidden"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className=" h-[18px] w-[18px]"
                      />
                    </div>
                    
                    
                 
                    <div className=" flex flex-col justify-center ">
                      <div
                        className={`font-medium  ${
                          key != "Name" ? "text-xs" : "text-sm"
                        } ${key != "Term"? "bg-white" : "bg-[#E3EFFC] px-[12px] py-[2px] rounded-lg text-[#04326B]"}  `}
                      >
                        {pupil[key]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
