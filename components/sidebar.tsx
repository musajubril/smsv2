import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { PiGraduationCapThin } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
export default function () {
    const nav = [
        {
           icon: <RiHome5Line />, name: "Home",
        },
        {
           icon: <PiGraduationCapThin />, name: "Students",
        },
       {
          icon:  <HiOutlineUsers />, name: "Staff",
       },
       {
          icon: <MdMenuBook />, name: "CBT"
       },
       {
          icon: <IoSettingsOutline />, name: "Settings",
       }
      ];
  return (
        <div className=' bg-[#0065C2] w-1/5 px-6 py-8 h-screen fixed'>
            <p className='text-white font-bold text-xl pb-8'>SMS</p>
            <div className=' flex flex-col gap-5'>
            {
            nav.map((item,index) => (
                <div className="" key={index} >
                      <button className='flex gap-2 text-white w-full font-medium items-center hover:bg-white hover:text-[#0065C2] p-3 rounded-lg'>
                  <p className='text-2xl'>{item.icon}</p>
                   <p className='text-base'>{item.name}</p>
                      </button>                   
                </div>
            ))
            }
             </div>
       </div>
  )
}
