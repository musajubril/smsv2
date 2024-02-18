import Layout from "@/components/shared/dashboardLayout/Layout";
import React from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import StudentProfile from "@/components/studentsProfile/StudentProfile";
import StudentProfileMini from "@/components/studentsProfile/StudentProfileMini";

export default function parents() {
  return (
    <div>
      <div className=" ">
        <Layout>
          <div>
            {/* top  */}
            <div className="grid gap-3 md:grid-cols-3 w-full p-5 bg-[#034A8A] pb-9 rounded-lg">
              {/* left  */}
              <div className="flex flex-col gap-7 col-span-2 ">
                <div className=" flex gap-3 items-center ">
                  <div className=" p-8 rounded-full border-2 border-white-100"></div>
                  <div className=" flex flex-col gap-1 text-white-100">
                    <div className=" font-semibold text-xl">
                      Bolaji AbdulQowiyy
                    </div>
                    <div className=" font-medium text-sm md:text-base">
                      Senior Secondary 3
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col md:flex-row gap-3 md:gap-8  text-white-100">
                  <div className=" flex items-center md:flex-col gap-2">
                    <div className=" font-normal text-sm">Class</div>
                    <div className=" font-medium text-base">
                      Senior Secondary 3A
                    </div>
                  </div>
                  <div className=" flex items-center md:flex-col gap-2">
                    <div className=" font-normal text-sm">Department</div>
                    <div className=" font-medium text-base">Sciences</div>
                  </div>
                  <div className=" flex items-center md:flex-col gap-2">
                    <div className=" font-normal text-sm">Year Admitted</div>
                    <div className=" font-medium text-base">2018/19</div>
                  </div>
                  <div className=" flex items-center md:flex-col gap-2">
                    <div className=" font-normal text-sm">Performance</div>
                    <div className=" font-medium text-base">Very Good</div>
                  </div>
                </div>
              </div>

              {/* righht  */}
              <div className=" flex flex-col justify-center items-center gap-1 col-span-1 text-white-100">
                <div className=" font-bold text-5xl md:text-6xl">97%</div>
                <div className=" font-normal text-xs md:text-base">
                  Current term grade
                </div>
              </div>
            </div>

            {/* bottom  */}
            <div className="flex flex-col gap-4 py-4">
              <div className=" flex gap-5 ">
                <div className=" font-semibold text-base md:text-xl">
                  Academic Result
                </div>
                <div className=" hidden md:flex items-center gap-3 font-normal text-sm ">
                  <div>
                    <LuArrowDownUp />
                  </div>
                  <div> Current Result</div>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <StudentProfile />
              </div>
              <div className=" md:hidden">
                <StudentProfileMini />{" "}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div> 
  );
}
