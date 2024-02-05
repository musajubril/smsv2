import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useQuery } from "@tanstack/react-query";
import { TEACHERS } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import { queryKeys } from '@/api/queryKey';
import Router, { useRouter } from "next/router";
import Link from "next/link";

export default function StaffList({staffs}) {


    const router = useRouter();
    let school;
    if (typeof window !== 'undefined') {
      school = localStorage.getItem('schoolSlug');
    }
  return (
    <div>
      <div className='  shadow  '>
<div className=" grid grid-cols-6 text-sm bg-[#F5FAFF]  p-3  rounded-t-lg">
            <div className=" font-semibold text-xs flex gap-2 col-span-2">
              <input type="checkbox" name="" id="" className=" h-5 w-5" />
              Name
            </div>
            <div className=" font-semibold text-xs col-span-1">Department</div>
            <div className=" font-semibold text-xs col-span-1">Role</div>
            <div className=" font-semibold text-xs col-span-1">
              Qualification
            </div>
            <div className=" font-semibold text-xs col-span-1 flex justify-center">
              Action
            </div>
          </div>

<div className="flex flex-col gap-3 py-2 px-3">
            {
              staffs &&
                staffs.map((teachers) => (
                  <div
                    key={teachers.id}
                    className=" grid grid-cols-6 font-semibold text-sm "
                  >
                    <div className=" col-span-2 flex items-center gap-3">
                      <div className="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className=" h-5 w-5"
                        />
                      </div>
                      <div className=" border h-8 w-8 rounded-full overflow-hidden">
                        <img
                          src={teachers.image}
                          alt=""
                          className=" object-cover "
                        />
                      </div>
                  
                      <Link href={`/${school}/staff/${teachers.id}/`}>
                       <div className="">
                       <p>{teachers.full_name}</p>  
                      <p className=" font-normal text-xs text-[#475367]">ID:{teachers.id}</p>
                      </div>
                      </Link>
                    </div>
                    <div className="col-span-1 text-gray-400">Null</div>
                    <div className="col-span-1 ">{teachers.role}</div>

                    <div className=" cursor-pointer ">
                      Null
                      
                    </div>
                    <div className=' flex  justify-center items-center'><HiDotsVertical /></div>
                  </div>
                ))
            }
          </div>


    {/* <div className="flex items-center justify-center pt-5"> */}
          {/* <div className=" flex items-center gap-3">
            <div className=" border border-[#D0D5DD] rounded-md p-2 shadow">
              <SlArrowLeft />
            </div>
            <div className=" flex gap-3">
              <div className=" border rounded-md py-1 px-3 items-center">1</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">2</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">3</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">4</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">5</div>
            </div>
            <div className=" border border-[#D0D5DD] rounded-md p-2 shadow">
              <SlArrowRight />
            </div>
          </div> */}
        {/* </div> */}
    </div>
 
  

</div>


  )
}