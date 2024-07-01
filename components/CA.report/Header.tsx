import React from 'react'

export default function Header({session,studentClass}) {
  return (
    <div>
         <div className=' flex gap-8 w-full justify-center'>
        <div className=' w-36 h-36'><img src="/bestcollegelogo.png" alt="" /></div>
        <div className=' flex flex-col gap-2'>
          <div className='text-4xl font-bold'>BEST COLLEGE HIGH SCHOOL</div>
          <div className=' text-lg'>OYEWOLE ROAD MURELO BUS STOP AGEGE, TEL:08080808080, EMAIL-</div>
           <div className=' text-sm italic'>bestcollegehighschool@gmail.com</div>
           <div className='text-sm italic font-semibold text-black'>continuous assessment report {session}</div>
        </div>
        <div className=' border-r-4 border-l-4 flex flex-col  p-1 gap-1'>
          <div className=' border px-4 py-3 text-lg font-semibold'> {studentClass}</div>
          <div className=' border px-4 py-3 text-lg font-semibold bg-black text-white-100'> SECOND <br /> TERM</div>

        </div>

      </div>
    </div>
  )
}
