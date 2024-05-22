import LayoutStaff from "@/components/StaffLayout/LayoutStaff";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import Subjectcard from "@/components/shared/subjectCard/Subjectcard";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function subject() {

    const sortOptions = ["All","Ascending", "Descending"];

    const handleSortSelect = (e) => {};

    const [searchedStudents, setSearchedStudents] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      let searchedList = [].filter((item) => {
        return item.full_name.toLowerCase().includes(searchTerm?.toLowerCase());
      });
      setSearchedStudents(searchedList);
      // console.log(searchedStudents)
    };


  return (
    <div>
      <LayoutStaff>
        <div>
          {/* top  */}

          <div className=" flex items-center gap-3 cursor-pointer pb-5">
            <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
              <FaArrowLeftLong />
            </div>
            <div>Go Back</div>
            <div className=" text-gray-400">Dashboard  /</div>
            <div className=" text-gray-400">Classes /</div>
            <div className=" text-gray-400">JSS 1 /</div>
            <div className=" ">Mathematics</div>
          </div>

          <div className=" flex justify-between items-center pb-3">
            <div className="flex gap-2">
            <p className=" font-semibold text-2xl">Mathematics</p>
            <div className=" flex items-center rounded-lg py-1 px-2 text-white-100 text-xs font-medium bg-[#009688]">25</div>
            </div>
            <div>
              <Link href={`/student/add`}>
                <Button
                  intent="primary"
                  size="base"
                  text="Upload Question"
                  disabled={false}
                  onClick={undefined}
                />
              </Link>
            </div>
          </div>

          <div className=" flex justify-between pb-5">
            <div>
              <input
                type="search"
                name=""
                id=""
                className=" border border-[#E4E7EC] py-2 px-4 rounded-md outline-none"
                placeholder="Search subject"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div className=" flex gap-3">
              <p className=" flex items-center">Sort:</p>
              <div className="flex items-center gap-3">
                <Dropdown
                  options={sortOptions}
                  onSelect={handleSortSelect}
                  placeholder="Date Added"
                />
              </div>
            </div>
          </div>

          {/* bottom  */}
          <div className=" flex flex-col">
            <div className=" grid grid-cols-3 gap-6 py-3">
              <Subjectcard />
              <Subjectcard />
              <Subjectcard />
            </div>
            <div className=" grid grid-cols-3 gap-6 py-3">
              <Subjectcard />
              <Subjectcard />
              <Subjectcard />
            </div>
          </div>
        </div>
      </LayoutStaff>
    </div>
  );
}
