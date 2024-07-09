import { getRequest } from "@/api/apiCall";
import { STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import StudentList from "@/components/StudentList";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineExport, AiOutlineImport } from "react-icons/ai";
import Pagination from "@/components/shared/Pagination";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ClassesTable from "./ClassesTable";

export default function Classes() {
  const subjectOptions = ["All subjects","Mathematics", "History", "English", "Computer", "Basic Science", "Basic Tech", "Agricultural Science", "Social Studies"];
  const termOptions = ["All Terms","First", "Second", "Third"];
 
  const sortOptions = ["All","Ascending", "Descending"];

  const [students, setStudents] = React.useState([]);



  const [filteredStudents, setFilteredStudents] = useState(null);




  const handleTermSelect = (e) => {
  
  };

  const handleSubjectSelect = (e) => {
  
  };


  const handleSortSelect = (e) => {  };

  return (
    <div className=" bg-gray-50">
      <Layout>
        <div className=" ">
      <div className=" flex justify-between items-center pb-5">
        <div className=" flex items-center gap-3 cursor-pointer">
          <div className="border border-[#E4E7EC] bg-white-100 py-1 px-2 rounded-lg">
            <FaArrowLeftLong />
          </div>
          <div className=" text-gray-400">Go Back</div>
          <div className=" text-gray-400">Dashboard /</div>
          <div className=" text-gray-400">Class /</div>
          <div>JSS 1</div>
        </div>
      </div>

        <div className=" p-3">
          <div className=" flex justify-between items-center pb-6">
            <p className=" font-semibold text-2xl">JSS 1</p>
            <div className="flex gap-4">
              <div className=" flex p-2 border-[#0065C2] border items-center gap-1 bg-white-100 rounded cursor-pointer text-[#0065C2]">
                
                <div>Upload Question</div>
              </div>
              <div>
                  <Button
                    intent="primary"
                    size="base"
                    text=" + Add New Student"
                    disabled={false}
                    onClick={undefined}
                  />
               
              </div>
            </div>
          </div>

          <div className=" flex justify-between pb-6">
            <div className="hidden md:flex relative items-center">
            <CiSearch className="h-5 w-5 text-gray-500 absolute left-4" />
            <input
              type="text"
              placeholder="Search JSS 1"
              className="py-1 pl-10 pr-2 border border-gray-400 rounded-sm focus:outline-none  focus:border-blue-500"
            />
          </div>
            
            <div className=" flex gap-3">
              <p className=" flex items-center mr-2">Filters:</p>
              <div className="flex items-center gap-3 text-sm">
                <Dropdown
                  options={subjectOptions}
                  onSelect={handleSubjectSelect}
                  placeholder="Subject"
                />
                <Dropdown
                  options={termOptions}
                  onSelect={handleTermSelect}
                  placeholder="Term"
                />

                <Dropdown
                  options={sortOptions}
                  onSelect={handleSortSelect}
                  placeholder="Sort"
                />
              </div>
            </div>
          </div>

          <div>
            <ClassesTable/>
          </div>
          {/* <div className={``}>
            {length !== undefined && 
              <Pagination paginate={paginate} count={length}></Pagination>
             } 
          </div> */}
        </div>
        </div>
      </Layout>
    </div>
  );
}
