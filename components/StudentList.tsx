import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDropleft } from "react-icons/io";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function StudentList({students}) {
 
  return (
    <div>
      <div>
        <div className=" my-6 rounded-lg shadow-lg">
          <div className=" grid grid-cols-6 text-sm bg-[#F5FAFF] p-3  rounded-t-lg">
            <div className=" font-semibold text-xs flex gap-2 col-span-2">
              <input type="checkbox" name="" id="" className=" h-5 w-5" />
              Name
            </div>
            <div className=" font-semibold text-xs col-span-1">Class</div>
            <div className=" font-semibold text-xs col-span-1">Gender</div>
            <div className=" font-semibold text-xs col-span-1">
              Enrollment status
            </div>
            <div className=" font-semibold text-xs col-span-1 flex justify-center">
              Action
            </div>
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            {
              students &&
                students.map((pupil) => (
                  <div
                    key={pupil.id}
                    className=" grid grid-cols-6 font-semibold text-sm "
                  >
                    <div className=" col-span-2 flex items-center gap-3">
                      <div className="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className=" h-5 w-5"
                        />
                      </div>
                      <div className=" border h-8 w-8 rounded-full overflow-hidden">
                        <img
                          src={pupil.image}
                          alt=""
                          className=" object-cover "
                        />
                      </div>
                      <div className=""> <p>{pupil.full_name}</p>
                      <p className=" font-normal text-xs text-[#475367]">ID:{pupil.id}</p></div>
                    </div>
                    <div className="col-span-1">{pupil.class}</div>
                    <div className="col-span-1 text-gray-400">{pupil.gender}</div>
                    <div
                      className={`col-span-1 w-fit rounded-lg h-fit px-3 ${
                        pupil.enrollment_status === "Pending"
                          ? "bg-[#FEF6E7] text-[#865503]"
                          : "bg-[#E7F6EC] text-[#036B26]"
                      }`}
                    >
                      {pupil.enrollment_status}
                    </div>
                    <div className=" cursor-pointer flex justify-center">
                      <HiDotsVertical />
                    </div>
                  </div>
                ))
            }
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className=" flex items-center gap-3">
            <div className=" border border-[#D0D5DD] rounded-md p-2">
              <SlArrowLeft />
            </div>
            <div className=" flex gap-3">
              <div className=" border rounded-md py-1 px-3 items-center">1</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">2</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">3</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">4</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">5</div>
            </div>
            <div className=" border border-[#D0D5DD] rounded-md p-2">
              <SlArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
