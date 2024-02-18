import { getRequest } from '@/api/apiCall';
import { STUDENTS } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import ClassCard from '@/components/shared/classCard/ClassCard';
import Table from '@/components/shared/reusableTable/Table';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'


export default function test() {



  // const uid:any = typeof window !== 'undefined' && localStorage.getItem("school_uid")
  // const {data:studentData} = useQuery({
  //   queryKey:[queryKeys.getStudents], 
  //   queryFn: async()=> await getRequest({url: STUDENTS(uid)})
  // }) 
  
  // const [students, setStudents] = React.useState([])
  // useEffect(()=>{
  //  setStudents(studentData?.data)
  // }
  //  ,[studentData])

  // //  console.log(students)

  //  const mappedStudents = students?.map((std) => {
  //   return {
  //     "Name": std.full_name,
  //     "Class": std.current_class.name,
  //     "Gender": std.gender,
  //     "Date of birth": std.date_of_birth,
  //     // "Religion": std.religion,
  //     // "State": std.state_of_origin,
  //     // "Email": std.email,
  //   }
  // })

  // const mappedImages = students?.map((std) => {
  //   return {
  //     "Image": std.image,
  //   }
  // })
  
  // const mappedIds = students?.map((std) => {
  //   return {
  //     "ID": std.id,
  //   }
  // })
  
  // console.log(mappedIds)

  return (
    // <div><Table students={mappedStudents} imageUrls={mappedImages} IDs={mappedIds} hasCheckBox={false} hasImage={false}></Table></div>
    <div>test
    </div>
  )
}
