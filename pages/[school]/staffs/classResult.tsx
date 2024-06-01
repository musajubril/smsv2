import { getRequest } from "@/api/apiCall";
import { CLASSSTUDENTS, HOMEROOMS} from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import LayoutStaff from "@/components/StaffLayout/LayoutStaff";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Table from "@/components/shared/reusableTable/Table";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function classResult({slug}:{slug:string}) {
  const uid: any = typeof window !== "undefined" && localStorage.getItem("schoolId");
  const { data: classData } = useQuery({
    queryKey: [queryKeys.getStudents],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) }),
  });
// console.log(classData);
  const [classes, setClasses] = React.useState([]);
  useEffect(() => {
    setClasses(classData?.data);
  }, [classData]);

  //  console.log(classes)

  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('schoolSlug');
  }
  const { data: studentList } = useQuery({
    queryKey: [queryKeys.getClass],
    queryFn: async () => await getRequest({ url: CLASSSTUDENTS(uid, 1) }),
  });
// console.log(studentList);
  const [students, setStudents] = React.useState([]);
  useEffect(() => {
    setStudents(studentList?.data);
  }, [studentList]);

   console.log(students)

   const mappedStudents = students?.map((std) => {
    return{
      Name: std.full_name,
      Percentage: std.id,
      Position: std.id
    }
   })

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
  
  // const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   if(typeof window !== "undefined"){
  //     const token = window.localStorage.getItem("schoolSlug")
  //     if(token){
  //       setIsAuthenticated(true)
  //     }
  //   }
  // }, [])

  // const handleAction = () => {
  //   // console.log("clicked");
  //   router.push(`/${isAuthenticated ? router.query.school :slug}/staffs/single_result/`)
   
  // };
  
  return (

    <div>
      <LayoutStaff>
     
      <p className="font-semibold text-2xl">Result</p>
     
      <Table students={mappedStudents} imageUrls={mappedImages} IDs={mappedIds} hasCheckBox={false} hasImage={false} isAttendance={undefined} hasAction={false} actionHandle={undefined} nameUrls={`/${school}/staffs/singleResult`}>

      </Table>
      </LayoutStaff>
      </div>
  )
}
