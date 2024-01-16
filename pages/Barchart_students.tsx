
import Options2 from '@/components/Barchart';
import React from 'react'


import { IoMdArrowDropdown } from "react-icons/io";

export default function Options() {
  return (
    <div>
      <div className=' p-4 rounded-lg bg-white-100 shadow'>
        <div className=' flex flex-col gap-5'>
          <div className=' flex justify-between'>
            <div className=' flex flex-col gap-2'>
              <h1 className='text-xs md:text-lg text-[#9291A5]'> Students</h1>
              <h1 className=' text-sm md:textxl text-[#000D19] font-semibold'>Total by Class</h1>
            </div>
            <div className=' flex gap-4 items-center'>
            <div className=' flex text-[#000D19] text-xs md:text-sm font-medium items-center  border-[#C2E2FF] rounded-lg border px-4  md:px-8 py-2'>
            Boys
            <h1 className='md:text-xl'> < IoMdArrowDropdown  /></h1>
            

            </div>
            <div className=' py-2 flex text-[#000D19] text-xs md:text-sm font-medium items-center  border-[#C2E2FF] rounded-lg border px-4 md:px-8 '>
            Yearly
            <h1 className='md:text-xl'> < IoMdArrowDropdown  /></h1>
            </div>
            
            </div>
          </div>
          

<Options2 />
        </div>

      </div>
    </div>
  )
}
