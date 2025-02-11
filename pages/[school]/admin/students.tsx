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

export default function student_list() {
  const classOptions = ["All","SSS 1", "SSS 2", "SSS 3"];
  const genderOptions = ["All","Male", "Female"];
  const enrollmentStatusOptions = ["All","Admitted", "Pending"];
  const sortOptions = ["All","Ascending", "Descending"];

  const [off, setOff] = useState(1);

  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");
  const [students, setStudents] = React.useState([]);

  const { data: studentData } = useQuery({
    queryKey: [queryKeys.getStudents, off],
    queryFn: async () => await getRequest({ url: STUDENTS(uid, off) }),
  });

  console.log(studentData);

  const paginate = (pageNumber) => {
    setOff(pageNumber);
  };

  const [filteredStudents, setFilteredStudents] = useState(null);
  const [dataCount, setdataCount] = useState();
  const [length, setlength] = useState();


  useEffect(() => {
    setStudents(studentData?.data);
    setFilteredStudents(studentData?.data);
    setdataCount(studentData?.pagination.count);
  }, [studentData]);
  console.log(dataCount)

  useEffect(() => {
    dataCount !== undefined && setlength(dataCount) 
  }, [dataCount]);

  //  let datalength = studentData?.pagination.count

  

  let school;
  if (typeof window !== "undefined") {
    school = localStorage.getItem("schoolSlug");
  }

  const handleClassSelect = (e) => {

    let filteredList;
    if (e === "All") {
      filteredList = students; 
    } else {
      filteredList = students.filter((student) => student.current_class.name === e);
    }

    setFilteredStudents(filteredList);
  };

  const handleGenderSelect = (e) => {
    let filteredList;
    if (e === "All") {
      filteredList = students; 
    } else {
      filteredList = students.filter((student) => student.gender === e);
    }
    setFilteredStudents(filteredList);
  };

  const handleStatusSelect = (e) => {

    let filteredList;
    if (e === "All") {
      filteredList = students; 
    } else {
      filteredList = students.filter((student) => student.enrollment_status === e);
    }

    setFilteredStudents(filteredList);
  };

  const handleSortSelect = (e) => {};

  const [searchedStudents, setSearchedStudents] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    let searchedList = [...students].filter((item) => {
      return item.full_name.toLowerCase().includes(searchTerm?.toLowerCase());
    });
    setSearchedStudents(searchedList);
    // console.log(searchedStudents)
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
                <Link href={`/${school}/admin/student/add`}>
                  <Button
                    intent="primary"
                    size="base"
                    text="Add New Student"
                    disabled={false}
                    onClick={undefined}
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
                onChange={(e) => handleSearch(e)}
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
            <StudentList
              students={searchTerm ? searchedStudents : filteredStudents}
            />
          </div>
          <div className={``}>
            {length !== undefined && 
              <Pagination paginate={paginate} count={length}></Pagination>
             } 
          </div>
        </div>
      </Layout>
    </div>
  );
}
