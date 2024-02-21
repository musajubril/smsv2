import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

export default function StudentProfileMini() {
  return (
    <div>
        <div className='flex justify-between w-full p-3 border-2 border-[#EDEDED] rounded-lg'>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <div className=' text-[#000D19] font-medium text-sm'>Senior Secondary School 1</div>
                <div className='text-[#04326B] bg-[#E3EFFC] w-fit rounded-lg px-2 font-medium text-xs'>1st Term</div>
                <div className='text-[#000D19] font-semibold text-base'>87%</div>
            </div>

            {/* right  */}
            <div className=" flex  justify-center items-center text-xl">
                  <HiDotsVertical />
            </div>
        </div>
    </div>
  )
}
