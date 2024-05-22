import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Dropdown from "@/components/shared/dropdown/Dropdown";
import React, { useEffect, useState } from "react";
import QuestionsList from "@/components/QuestionsList";

export default function questions() {
  const classOptions = ["All", "SSS 1", "SSS 2", "SSS 3"];
  const subjectOptions = ["All", "Mathematics", "Biology", "Physics", "Literature"];
  const termOptions = ["All", "First", "Second", "Third"];


  const [subject, setsubject] = React.useState([]);

  const handleClassSelect = (e) => {
    let filteredList;
    if (e === "All") {
      filteredList = subject;
    } else {
      filteredList = subject.filter(
        (student) => student.current_class.name === e
      );
    }
  };

  const handleSubjectSelect = (e) => {
    let filteredList;
    if (e === "All") {
      filteredList = subject;
    } else {
      filteredList = subject.filter((student) => student.gender === e);
    }
  };

  const handleTermSelect = (e) => {
    let filteredList;
    if (e === "All") {
      filteredList = subject;
    } else {
      filteredList = subject.filter(
        (student) => student.enrollment_status === e
      );
    }
  };

  const [searchedsubject, setSearchedsubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    let searchedList = [...subject].filter((item) => {
      return item.full_name.toLowerCase().includes(searchTerm?.toLowerCase());
    });
    setSearchedsubject(searchedList);
    // console.log(searchedStudents)
  };

  return (
    <div>
      <Layout>
        <div className=" p-3">
          <div className=" flex justify-between items-center pb-3">
            <p className=" font-semibold text-2xl">Question Bank</p>
            <div className="flex gap-4">
              <div>
                <Button
                  intent="primary"
                  size="base"
                  text="Upload Question"
                  disabled={false}
                  onClick={undefined}
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
                  options={subjectOptions}
                  onSelect={handleSubjectSelect}
                  placeholder="Subject"
                />
                <Dropdown
                  options={termOptions}
                  onSelect={handleTermSelect}
                  placeholder="Term"
                />{" "}
              </div>
            </div>
          </div>

          <div>
            <QuestionsList />
          </div>
        </div>
      </Layout>
    </div>
  );
}
