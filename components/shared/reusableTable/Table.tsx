import Link from "next/link";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";

export default function Table({ students, hasCheckBox, hasImage}) {
  if (!students || students.length === 0) {
    return;
  }

  const keys = Object.keys(students[0]);
  const key_length = keys.length;
  console.log(keys);
  console.log(key_length);

  return (
    <div>
      <div className=" px-4">
        <div className=" my-6 rounded-lg shadow-lg">

          <div
            className={` grid grid-cols-${key_length} ${ key_length === 5 ? "grid-cols-5" : ""} ${ key_length === 7 ? "grid-cols-7" : ""} ${ key_length === 8 ? "grid-cols-8" : ""}  text-sm bg-[#F5FAFF] p-3 rounded-t-lg`}
          >
            {keys.map((key, index) => (
              <div className=" font-semibold text-xs" key={index}>
                {key}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 py-3 px-3 ">
            {students.map((pupil, pupilIndex) => (
              <div
                className={`grid grid-cols-${key_length} ${ key_length === 5 ? "grid-cols-5" : ""} ${ key_length === 7 ? "grid-cols-7" : ""} ${ key_length === 8 ? "grid-cols-8" : ""} gap-3 `}
              >
                {keys.map((key, keyIndex) => (
                  <div className="flex items-center gap-2">
                    <div className={` ${
                          key != "Name" ? "hidden" : "block"
                        } ${ hasCheckBox ? "block" : "hidden"}`}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className=" h-[18px] w-[18px]"
                      />
                    </div>
                    <div className={` border p-4 rounded-full overflow-hidden ${
                          key != "Name" ? "hidden" : "block"
                        } ${ hasImage ? "block" : "hidden"}`}>
                        <img
                          src=""
                          alt=""
                          className=" object-cover "
                        />
                      </div>
                    <div className=" flex flex-col justify-center ">
                      <div className={`font-medium  ${
                          key != "Name" ? "text-xs" : "text-sm"
                        }  `}>{pupil[key]}</div>
                      <div
                        className={`font-normal text-xs text-[#475367] ${
                          key != "Name" ? "hidden" : "block"
                        }`}
                      >
                        ID:{pupilIndex}
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


