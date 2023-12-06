import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { TEACHERS } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import { queryKeys } from '@/api/queryKey';

export default function Fetchstaff() {
  const uid:any = typeof window !== 'undefined' && localStorage.getItem("school_uid")
  console.log(uid)
  const [staffs, setStaffs] = React.useState([])
  const {data:staffsData} = useQuery({
   queryKey:[queryKeys.getStaffs], 
   queryFn: async()=> await getRequest({url: TEACHERS(uid)})
  }) 
  
  React.useEffect(()=>{
   setStaffs(staffsData?.data)},[staffsData])
  console.log(staffsData);

  return (
    <div>staffs</div>
  )
}
