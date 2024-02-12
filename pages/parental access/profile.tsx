import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsCheck } from "react-icons/bs";
export default function Onboarding () {
  return (
    <div className=' h-screen md:bg-[#F9FAFB] bg-white-100'>
    <div className=' justify-evenly items-center flex md:block flex-col h-full' >
        <div className=' md:justify-between justify-center flex px-14 py-2  '>
            <div className=' text-[#0065C2] text-xl  font-bold  '>SMS</div>
            <div className='hidden md:flex gap-3 items-center'>
             <div className=' text-lg items-center bg-[#F0F2F5] p-1 rounded-full'><CiBellOn /></div>
               <div className=' flex gap-2 border border-[#D4D4D4] py-1 px-2 shadow items-center rounded-lg'>
               <div className=' w-8 h-8'><img src="./Avatars (1).png" alt="" /></div>
           <div>Bolaji.A</div>
         <div><MdKeyboardArrowDown /></div>                   
         </div>
         </div>
         </div>
         
         <div className=' sm:block  md:flex justify-center items-center h-[70%]'>
                <div className=' flex flex-col gap-5 items-center px-3'>
                   <div className=' h-16 w-16'> <img src="./emoji.png" alt="" /></div>
              <div className=' flex flex-col gap-2 items-center text-center'>                 <div className=' text-[#000D19] md:text-3xl text-xl font-semibold'>Welcome Mr Adam</div>
                <div className=' text-gray-100 text-base  '> Thank you for bringing your wards/childern to our school</div>
              </div>
             <div className=' flex flex-col gap-3 w-full px-3 '>
                     
                   <div className='  bg-white-100 py-2  flex gap-3 items-center px-3 rounded-lg'>
                       <div className=' w-12 h-12'><img src="./Avatars (1).png" alt="" />
                         </div>
                          <div className=' flex flex-col'>
                                 <div className=' text-[#878787] md:text-xl text-base font-semibold'>Bolaji AbdulQowiyy</div>
                                 <div className='text-[#878787] md:text-base text-sm font-medium '>Senior Secondary 3</div>
                            </div>
                     </div>
                     <div className='bg-white-100 py-2  flex gap-3 items-center px-3 rounded-lg'>
                         <div className=' w-12 h-12'>
                             <img src="./Avatars (1).png" alt="" />
                         </div>
                             <div className=' flex flex-col'>
                                 <div className=' text-[#878787] md:text-xl text-base font-semibold'>Bolaji AbdulQowiyy</div>
                                 <div className='text-[#878787] md:text-base text-sm font-medium '>Senior Secondary 3</div>
                             </div>
                          </div>
                     <div className='bg-white-100 py-2  flex gap-3 items-center px-3 rounded-lg'>
                         <div className=' w-12 h-12'>
                             <img src="./Avatars (1).png" alt="" />
                         </div>
                             <div className=' flex flex-col'>
                                <div className=' text-[#878787] md:text-xl text-base font-semibold'>Bolaji AbdulQowiyy</div>
                                 <div className='text-[#878787] md:text-base text-sm font-medium '>Senior Secondary 3</div>
                             </div>
                     </div>
                 </div>
                 </div>
             </div>
            </div>
         </div> 
  )
}