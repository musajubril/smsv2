import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { STUDENTS } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import { queryKeys } from '@/api/queryKey';
export default function Fetchstudents() {
  const uid:any = typeof window !== 'undefined' && localStorage.getItem("schoolId")
  console.log(uid)
  const [students, setStudents] = React.useState([])
  const {data:studentData} = useQuery({
   queryKey:[queryKeys.getStudents], 
   queryFn: async()=> await getRequest({url: STUDENTS(uid)})
  }) 
  
  
  React.useEffect(()=>{
   setStudents(studentData?.data)},[studentData])
  console.log(students);

  return (
    <div></div>
  )
}
