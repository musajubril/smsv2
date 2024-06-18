import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

export default function Table({
  students,
  hasCheckBox,
  hasImage,
  hasAction,
  imageUrls,
  IDs,
  isAttendance,
  actionHandle,
  nameUrls,
}) {
  if (!students || students.length === 0) {
    return;
  }

  const router = useRouter();
  const keys = Object.keys(students[0]);
  const key_length = keys.includes("Name") ? keys.length + 1 : keys.length;
  //   console.log(keys);
  //   console.log(key_length);


  const [open, setOpen] = useState(Array(students.length).fill(false));
// console.log(open)
  const handleAction = (index) => {
    setOpen(open.map((item, i) => (i === index ? !item : false)));
  };


  return (
    <div>
      <div className="">
        {isAttendance ? (
          // ATTENDANCE MODE
          <div className=" my-6 rounded-lg">
            {/* TABLE HEADER  */}
            <div
              className={` grid grid-cols-3  md:grid-cols-${
                key_length + 2
              }  text-sm bg-[#F5FAFF] p-3 rounded-t-lg`}
            >
              {keys.map((key, index) => (
                <div
                  className={` font-semibold text-xs ${
                    key != "Name" ? " col-sp" : "col-span-2"
                  }`}
                  key={index}
                  onClick={() => {
                    if (key === "Name") {
                      router.push(`${nameUrls}/${IDs[index].ID}`);
                    }
                  }}
                >
                  {key}
                </div>
              ))}

              <div className="hidden md:block col-span-1">Sign In</div>
              <div className="hidden md:block col-span-1">Sign out</div>
            </div>

            {/* TABLE BODY  */}
            <div className="flex flex-col gap-5 py-3 px-3 bg-white-100">
              {students.map((pupil, pupilIndex) => (
                <div
                  key={pupilIndex}
                  className={`grid grid-cols-3  md:grid-cols-${
                    key_length + 2
                  } gap-3`}
                >
                  {keys.map((key, keyIndex) => (
                    <div
                      className={`flex items-center  gap-2 ${
                        key != "Name" ? " col-span-1" : "col-span-2"
                      }`}
                      key={keyIndex}
                    >
                      <div
                        className={` ${key != "Name" ? "hidden" : "block"} ${
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
                      <div
                        className={` border h-8 w-8 rounded-full overflow-hidden ${
                          key != "Name" ? "hidden" : "block"
                        } ${hasImage ? "block" : "hidden"}`}
                      >
                        <img
                          src={imageUrls[pupilIndex].Image}
                          alt=""
                          className=" object-cover "
                        />
                      </div>
                      <div className=" flex flex-col justify-center ">
                        <div
                          className={`font-medium  ${
                            key != "Name" ? "text-xs" : "text-sm"
                          }  `}
                        >
                          {pupil[key]}
                        </div>
                        <div
                          className={`font-normal text-xs text-[#475367] ${
                            key != "Name" ? "hidden" : "block"
                          }`}
                        >
                          ID:{IDs[pupilIndex].ID}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="hidden md:block col-span-1">
                    <input type="checkbox" name="" id="" className=" h-5 w-5" />
                  </div>
                  <div className="hidden md:block col-span-1">
                    <input type="checkbox" name="" id="" className=" h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // NORMAL MODE
          <div className=" my-3 rounded-lg">
            {/* TABLE HEADER  */}
            <div
              className={` grid ${
                hasAction ? "grid-cols-4" : "grid-cols-3"
              } md:grid-cols-${hasAction ? key_length + 1 : key_length} ${
                key_length === 5 ? "grid-cols-5" : ""
              } ${key_length === 7 ? "grid-cols-7" : ""} ${
                key_length === 8 ? "grid-cols-8" : ""
              }  text-sm bg-[#F5FAFF] p-3 rounded-t-lg`}
            >
              {keys.map((key, index) => (
                <div
                  className={`flex  items-center gap-3 font-semibold text-xs  ${
                    key != "Name" ? " col-span-1 hidden md:block" : "col-span-2"
                  }`}
                  key={index}
                >
                  <div
                    className={` ${key != "Name" ? "hidden" : "block"} ${
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
                  {key}
                </div>
              ))}

              {hasAction ? (
                <div className="font-semibold text-xs">Action</div>
              ) : (
                ""
              )}
            </div>

            {/* TABLE BODY  */}
            <div className="flex flex-col gap-5 py-3 px-3 bg-white-100">
              {students.map((pupil, pupilIndex) => (
                <div
                  key={pupilIndex}
                  className={`grid ${
                    hasAction ? "grid-cols-4" : "grid-cols-3"
                  }  md:grid-cols-${hasAction ? key_length + 1 : key_length} ${
                    key_length === 5 ? "md:grid-cols-5" : ""
                  } ${key_length === 7 ? "md:grid-cols-7" : ""} ${
                    key_length === 8 ? "md:grid-cols-8" : ""
                  } gap-3`}
                >
                  {keys.map((key, keyIndex) => (
                    <div
                      className={`flex items-center gap-2 ${
                        key != "Name"
                          ? " col-span-1 hidden md:block"
                          : "col-span-2 cursor-pointer"
                      }`}
                      key={keyIndex}
                      onClick={() => {
                        if (key === "Name") {
                          router.push(`${nameUrls}/${IDs[pupilIndex].ID}`);
                        }
                      }}
                    >
                      <div
                        className={` ${key != "Name" ? "hidden" : "block"} ${
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
                      <div
                        className={` border h-8 w-8 rounded-full overflow-hidden ${
                          key != "Name" ? "hidden" : "block"
                        } ${hasImage ? "block" : "hidden"}`}
                      >
                        <img
                          src={imageUrls[pupilIndex].Image}
                          alt=""
                          className=" object-cover "
                        />
                      </div>
                      <div className=" flex flex-col justify-center ">
                        <div
                          className={`font-medium  ${
                            key != "Name" ? "text-xs" : "text-sm"
                          }  `}
                        >
                          {pupil[key]}
                        </div>
                        <div
                          className={`font-normal text-xs text-[#475367] ${
                            key != "Name" ? "hidden" : "block"
                          }`}
                        >
                          ID:{IDs[pupilIndex].ID}
                        </div>
                      </div>
                    </div>
                  ))}

                  {hasAction ? (
                    <div className="relative">
                      <div onClick={() => handleAction(pupilIndex)}>
                        <HiDotsVertical />
                      </div>
                      {open[pupilIndex] ? (
                        <div className="absolute z-50 mt-2 py-2 rounded-md shadow bg-white-100 ">
                          {actionHandle &&
                            actionHandle.map((act, actIndex) => (  
                            act.type === "url" ?   
                          <Link href={act.actionUrl(IDs[pupilIndex].ID)} className="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-white-100 cursor-pointer" key={actIndex}>
                            {act.label}
                          </Link>
                          : <div className="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-white-100 cursor-pointer" key={actIndex} onClick={act.actionClick}>
                            {act.label}
                          </div>
                            ))
                          }
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
