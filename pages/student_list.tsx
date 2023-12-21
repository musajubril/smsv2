import StudentList from "@/components/StudentList";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import React, { useState } from "react";
import { AiOutlineExport, AiOutlineImport } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function student_list() {
  const classOptions = ["SSS1", "SSS2", "SSS3"];
  const genderOptions = ["Male", "Female"];
  const enrollmentStatusOptions = ["Admitted", "Pending"];
  const sortOptions = ["Ascending", "Descending"];

  const handleSelect = () => {};

  return (
    <div>
      <Layout>
        <div className=" p-3">
          <div className=" flex justify-between items-center pb-3">
            <p className=" font-semibold text-2xl">Students</p>
            <div className="flex gap-4">
              <div className=" flex p-2 border items-center gap-1 border-gray-100 bg-white-100 rounded-md cursor-pointer">
                <AiOutlineExport />
                <div>Export CSV</div>
              </div>
              <div>
                <Button
                  intent="primary"
                  size="base"
                  text="Add New Student"
                  disabled={false}
                />
              </div>
            </div>
          </div>

          <div className=" flex justify-between">
            <div>
              <input
                type="search"
                name=""
                id=""
                className=" border border-[#E4E7EC] py-2 px-4 rounded-md"
                placeholder="Search here..."
              />
            </div>
            <div className=" flex gap-3">
              <p className=" flex items-center">Filters:</p>
              <div className="flex items-center gap-3">
                <Dropdown
                  options={classOptions}
                  onSelect={handleSelect}
                  placeholder="Class"
                />
                <Dropdown
                  options={genderOptions}
                  onSelect={handleSelect}
                  placeholder="Gender"
                />
                <Dropdown
                  options={enrollmentStatusOptions}
                  onSelect={handleSelect}
                  placeholder="Enrollment Status"
                />
                <Dropdown
                  options={sortOptions}
                  onSelect={handleSelect}
                  placeholder="Sort"
                />
              </div>
            </div>
          </div>

          <div>
            <StudentList />
          </div>
        </div>
      </Layout>
    </div>
  );
}
