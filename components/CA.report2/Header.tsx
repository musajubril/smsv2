import React from 'react'

export default function Header() {
 
  return (
    <div className='py-4'>
      <div className='grid grid-cols-2 gap-8 '>
        <div>
          <div className='font-bold mb-2 text-lg'>1. ATTENDANCE RECORD</div>
          <div className='grid grid-cols-2 grid-rows-4 border'>
            <div className='border-b border-r font-medium text-center'>Properties</div>
            <div className='border-b font-medium text-center'>School Attendance</div>
            <div className='border-b border-r'>No Of Days School Opened</div>
            <div className='border-b '></div>
            <div className='border-b border-r'>No Of Days Present</div>
            <div className='border-b '></div>
            <div className='border-r '>No Of Days Absent</div>
            <div className='p-2'></div>
          </div>
        </div>
  
        <div>
          <div className='font-bold mb-2 flex text-lg'>
            CONTINUOUS ASSESSMENT FOR
            <div className=' border-b flex-grow'></div> 
            TERM
          
          </div>
          <div className='border flex flex-col gap-2 py-3 px-2'>
            <div className='flex items-baseline gap-3'>
              <div>CLASS</div>
              <div className='border-b flex-grow mx-2'></div>
            </div>
            <div className='flex items-baseline gap-3'>
              <div>NO IN CLASS</div>
              <div className='border-b flex-grow mx-2'></div>
            </div>
            <div className='flex items-baseline gap-3'>
              <div>SCHOOL CLOSES</div>
              <div className='border-b flex-grow mx-2'></div>
            </div>
            <div className='flex items-baseline gap-3'>
              <div>NEXT TERM BEGINS</div>
              <div className='border-b flex-grow mx-2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






