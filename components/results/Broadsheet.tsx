import { useRouter } from "next/router";
import React from "react";

export default function Broadsheet({ students, IDs }) {
  if (!students || students.length === 0) {
    return;
  }

  const router = useRouter();
  const keys = Object.keys(students[0]);
  const key_length = keys.length + 3;
  //   console.log(keys);
  //   console.log(key_length);

  return (
    <div className=" py-3">
      <div className=" flex gap-8 w-full justify-center">
        <div className=" w-36 h-36">
          <img src="/bestcollegelogo.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2 text-center">
          <div className="text-4xl font-bold">
            BEST COLLEGE HIGH SCHOOL, OYEWOLE
          </div>
          <div className=" text-lg">
            OYEWOLE ROAD MURELO BUS STOP AGEGE, TEL:08080808080, EMAIL-
          </div>
          <div className=" text-sm italic">
            {" "}
            bestcollegehighschool@gmail.com
          </div>
          <div className="text-sm italic font-semibold text-black">
            continuous assessment report
            {/* {results?.session} */}
          </div>
        </div>
        <div className=" border-r-4 border-l-4 flex flex-col  p-1 gap-1">
          <div className=" border px-4 py-3 text-lg font-semibold">
            {/* {results?.student?.current_class.name} */}
          </div>
          <div className=" border px-4 py-3 text-lg font-semibold bg-black text-white-100">
            {" "}
            SECOND <br /> TERM
          </div>
        </div>
      </div>

      <div className=" my-3 px-4 rounded-lg">
        {/* TABLE HEADER  */}
        <div
          className={` grid grid-cols-${key_length} ${
            key_length === 5 ? "grid-cols-5" : ""
          } ${key_length === 7 ? "grid-cols-7" : ""} ${
            key_length === 8 ? "grid-cols-8" : ""
          } ${key_length === 9 ? "grid-cols-9" : ""} ${
            key_length === 10 ? "grid-cols-10" : ""
          } text-sm px-3 rounded-t-lg `}
        >
          <div
            className={`flex  items-center  font-semibold text-xs    col-span-1 border p-3`}
          >
            Student Admission Number
          </div>
          <div
            className={`flex  items-center  font-semibold text-xs    col-span-1 border p-3`}
          >
            Student Name
          </div>
          {keys.map((key, index) => (
            <div key={index}>
              <div
                className={`flex  items-center  font-semibold text-xs col-span-1 border p-3`}
              >
                {key}
              </div>
              <div
                className={` grid grid-cols-4 font-semibold text-[10px] col-span-1 `}
              >
                <div className={`border p-3 flex justify-center`}>1st C.A</div>
                <div className={`border p-3 flex justify-center`}>2nd C.A</div>
                <div className={`border p-3 flex justify-center`}>Exam</div>
                <div className={`border p-3 flex justify-center`}>Total</div>
              </div>
            </div>
          ))}
          <div
            className={`flex  items-center  font-semibold text-xs    col-span-1 border p-3`}
          >
            Total
          </div>
        </div>

        {/* TABLE BODY  */}
        <div className="flex flex-col px-3 ">
          {students.map((pupil, pupilIndex) => (
            <div
              key={pupilIndex}
              className={`grid grid-cols-${key_length} ${
                key_length === 5 ? "md:grid-cols-5" : ""
              } ${key_length === 7 ? "md:grid-cols-7" : ""} ${
                key_length === 8 ? "md:grid-cols-8" : ""
              } ${key_length === 9 ? "md:grid-cols-9" : ""} ${
                key_length === 10 ? "md:grid-cols-10" : ""
              } `}
            >
              <div className={`flex items-center col-span-1 border px-3 `}>
                <div className={`font-medium text-sm `}>
                  {IDs[pupilIndex].ID}
                </div>
              </div>
              <div className={`flex items-center col-span-1 border px-3 `}>
                <div className={`font-medium text-xs `}>
                  {IDs[pupilIndex].Name}
                </div>
              </div>
              {keys.map((key, keyIndex) => (
                <div className={` col-span-1 `} key={keyIndex}>
                  <div className=" flex flex-col justify-center ">
                    <div
                      className={` grid grid-cols-4 font-semibold text-[10px] col-span-1  `}
                    >
                      <div className={`border p-3 flex justify-center`}>1st C.A</div>
                      <div className={`border p-3 flex justify-center`}>2nd C.A</div>
                      <div className={`border p-3 flex justify-center`}>Exam</div>
                      <div className={`border p-3 flex justify-center`}>Total</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className={`flex items-center col-span-1 border px-3 `}>
                <div className={`font-medium text-sm `}>
                  {IDs[pupilIndex].ID}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
