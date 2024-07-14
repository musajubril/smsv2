import Broadsheet from '@/components/results/Broadsheet'
import { getRequest } from "@/api/apiCall";
import { HOMEROOMS, STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import { useQuery } from "@tanstack/react-query";
import router from "next/router";
import React, { useEffect, useState } from "react";



export default function broadsheet() {
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

   console.log(students)

  const mappedStudents = students?.map((std) => {
    return {
      Class: std.current_class.name,
      Gender: std.gender,
      "Date Of Birth": std.date_of_birth,
      Religion: std.religion,
      State: std.state_of_origin,
      Email: std.email,
      Age: std.age,
    };
  });
  const mappedIds = students?.map((std) => {
    return {
      Name: std.full_name,
      ID: std.admission_number,
    };
  });

  // console.log(mappedIds);
  return (
    <div><Broadsheet students={mappedStudents} IDs={mappedIds} /></div>
  )
}
