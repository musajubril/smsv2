import { getRequest } from "@/api/apiCall";
import { STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import ClassCard from "@/components/shared/classCard/ClassCard";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Table from "@/components/shared/reusableTable/Table";
import Multiselect from "@/components/shared/select/Multiselect";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function test() {
  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");
  const { data: studentData } = useQuery({
    queryKey: [queryKeys.getStudents],
    queryFn: async () => await getRequest({ url: STUDENTS(uid, 1) }),
  });

  const [students, setStudents] = React.useState([]);
  useEffect(() => {
    setStudents(studentData?.data);
  }, [studentData]);

  //  console.log(students)

  const mappedStudents = students?.map((std) => {
    return {
      Name: std.full_name,
      Class: std.current_class.name,
      Gender: std.gender,
      "Date of birth": std.date_of_birth,
      Religion: std.religion,
      // "State": std.state_of_origin,
      // "Email": std.email,
    };
  });

  const mappedImages = students?.map((std) => {
    return {
      Image: std.image,
    };
  });

  const mappedIds = students?.map((std) => {
    return {
      ID: std.id,
    };
  });

  console.log(mappedIds);

  const handleAction = () => {
    console.log("clicked");
  };

  const subjectOptions = [
    {value: Math.random(), label:"Mathematics"},
    {value: Math.random(), label:"English Language"},
    {value: Math.random(), label:"Biology"},
    {value: Math.random(), label:"Chemistry"},
    {value: Math.random(), label:"Physics"},
    {value: Math.random(), label:"Agricultural science"},
    {value: Math.random(), label:"Literature"},
    {value: Math.random(), label:"Information Technology"},
    {value: Math.random(), label:"Civic Education"},
  ];

  const [mock, setMock] = useState();

  useEffect(() => {
    console.log(mock);
  }, [mock]);

  return (
    <Layout><Table students={mappedStudents} imageUrls={mappedImages} IDs={mappedIds} hasCheckBox={false} hasImage={false} isAttendance={undefined} hasAction={true} actionHandle={handleAction} nameUrls={`/best-college/admin/student`}></Table></Layout>
    // <div>
    //   <Multiselect
    //     options={subjectOptions}
    //     placeholder={"dummy"}
    //     state={mock}
    //     setState={setMock}
    //   />
    // </div>
  );
}
