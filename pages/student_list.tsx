import StudentList from "@/components/StudentList";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineExport, AiOutlineImport } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";


const students = [
  {
    id: "1",
    full_name: "Shakirat Akanji",
    class: "SSS 2",
    gender: "Female",
    enrollment_status: "Admitted",
    image: "/aaron/dorcas",
  },
  {
    id: "2",
    full_name: "Shakirat Akanji",
    class: "SSS 2",
    gender: "Female",
    enrollment_status: "Admitted",
    image: "/aaron/dorcas",
  },
  {
    id: "3",
    full_name: "Shakirat Akanji",
    class: "SSS 2",
    gender: "Female",
    enrollment_status: "Pending",
    image: "/aaron/dorcas",
  },
  {
    id: "4",
    full_name: "Shakirat Akanji",
    class: "SSS 2",
    gender: "Female",
    enrollment_status: "Admitted",
    image: "/aaron/dorcas",
  },
  {
    id: "5",
    full_name: "Shakirat Akanji",
    class: "SSS 2",
    gender: "Female",
    enrollment_status: "Pending",
    image: "/aaron/dorcas",
  },
  {
    id: "6",
    full_name: " Akanji Adeware",
    class: "SSS 1",
    gender: "Male",
    enrollment_status: "Admitted",
    image: "/aaron/dorcas",
  },
  {
    id: "7",
    full_name: " Akanji Adeware",
    class: "SSS 1",
    gender: "Male",
    enrollment_status: "Admitted",
    image: "/aaron/dorcas",
  },
  {
    id: "8",
    full_name: " Akanji Adeware",
    class: "SSS 1",
    gender: "Male",
    enrollment_status: "Pending",
    image: "/aaron/dorcas",
  },
  {
    id: "9",
    full_name: " Akanji Adeware",
    class: "SSS 1",
    gender: "Male",
    enrollment_status: "Admitted",
    image: "/aaron/dorcas",
  },
  {
    id: "10",
    full_name: " Akanji Adeware",
    class: "SSS 1",
    gender: "Male",
    enrollment_status: "Pending",
    image: "/aaron/dorcas",
  },
];

export default function student_list() {
  const classOptions = ["SSS 1", "SSS 2", "SSS 3"];
  const genderOptions = ["Male", "Female"];
  const enrollmentStatusOptions = ["Admitted", "Pending"];
  const sortOptions = ["Ascending", "Descending"];

  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('sch_name');
  }
  
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleClassSelect = (e) => {
    let filteredList = [...students];
    console.log(e);
    filteredList = students.filter((student) => student.class === e);
    setFilteredStudents(filteredList);
    console.log(filteredList);

  };

  const handleGenderSelect = (e) => {
    let filteredList = [...students];
    console.log(e);
    filteredList = students.filter((student) => student.gender === e);
    setFilteredStudents(filteredList);
    console.log(filteredList);

  };

  const handleStatusSelect = (e) => {
    let filteredList = [...students];
    console.log(e);
    filteredList = students.filter((student) => student.enrollment_status === e);
    setFilteredStudents(filteredList);
    console.log(filteredList);

  };

  const handleSortSelect = (e) => {
  };
  
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
                <Link href={`/${school}/student/add`}>
                <Button
                  intent="primary"
                  size="base"
                  text="Add New Student"
                  disabled={false}
                  />
                  </Link>
              </div>
            </div>
          </div>

          <div className=" flex justify-between">
            <div>
              <input
                type="search"
                name=""
                id=""
                className=" border border-[#E4E7EC] py-2 px-4 rounded-md outline-none"
                placeholder="Search here..."
              />
            </div>
            <div className=" flex gap-3">
              <p className=" flex items-center">Filters:</p>
              <div className="flex items-center gap-3">
                <Dropdown
                  options={classOptions}
                  onSelect={handleClassSelect}
                  placeholder="Class"
                />
                <Dropdown
                  options={genderOptions}
                  onSelect={handleGenderSelect}
                  placeholder="Gender"
                />
                <Dropdown
                  options={enrollmentStatusOptions}
                  onSelect={handleStatusSelect}
                  placeholder="Enrollment Status"
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
            <StudentList  students={filteredStudents} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
