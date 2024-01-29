import React from 'react'
import Layout from "@/components/shared/dashboardLayout/Layout";
import Button from '@/components/shared/button/Button';
import StaffDropdown from '@/components/shared/dropdown/StaffDropdown';
import Search from '@/components/Search';
import StaffList from '@/components/StaffList';
import {getRequest} from "@/api/apiCall";
import {TEACHERS} from "@/api/apiUrl";
import {queryKeys} from "@/api/queryKey";
import {useQuery} from "@tanstack/react-query";
import Link from "next/link";
import students from './[school]/students';
 

export default function staff_list() {
  const uid:any = typeof window !== 'undefined' && localStorage.getItem("schoolId")
  console.log(uid)
  const [staffs, setStaffs] = React.useState([])
  const {data:staffData} = useQuery({
   queryKey:[queryKeys.getStaffs], 
   queryFn: async()=> await getRequest({url: TEACHERS(uid)})
  }) 

  React.useEffect(()=>{
    setStaffs(staffData?.data)},[staffData])
   console.log(staffs);

  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('sch_name');
  }

  return (
    <div>
      <Layout>

        <div className=' flex gap-3 flex-col w-full' >
          <div className=' flex items-center justify-between '>
            <h1 className='text-black text-2xl font-semibold'>Staff</h1>
            <div>
                <Button
                    intent="primary"
                    size="base"
                    text="+ Add New Staff"
                    disabled={false} 
                    onClick={undefined}
                      />
              </div>
          </div>
          <div>      
            <Search />
         </div>

        <StaffList staffs={staffs} />
          
        </div>
    
      </Layout>
    </div>
  );
}