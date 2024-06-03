import React from 'react'

export default function reportcard3() {
  return (
    <div>
      <div className=' py-5  flex w-full items-center justify-center text-center  '>
        <div className='max-w-[70%] flex flex-col gap-5'>
          <div className=' flex gap-8 w-full justify-center'>
            <div className=' w-36 h-36'><img src="/bestcollegelogo.png" alt="" /></div>
            <div className=' flex flex-col gap-2'>
              <div className='text-4xl font-bold'>BEST COLLEGE HIGH SCHOOL, OYEWOLE</div>
              <div className=' text-lg'>OYEWOLE ROAD MURELO BUS STOP AGEGE, TEL:08080808080, EMAIL-</div>
              <div className=' text-sm italic'> bestcollegehighschool@gmail.com</div>
              <div className='text-sm italic font-semibold text-black'>continuous assessment report 2023/2024</div>
            </div>
            <div className=' border-r-4 border-l-4 flex flex-col  p-1 gap-1'>
              <div className=' border px-4 py-3 text-lg font-semibold'> JSS 3</div>
              <div className=' border px-4 py-3 text-lg font-semibold bg-black text-white-100'> SECOND <br /> TERM</div>

            </div>
          </div>

          <div className=' flex flex-col gap-3'>
            <div className=' flex gap-2'>
              <div>NAME</div>
              <div className=' border-b w-[7%]'></div>
              <div>GENDER</div>
              <div className=' border-b w-[7%]'></div>
            </div>
            <div className=' flex gap-2'>
              <div>CLASS</div>
              <div className=' border-b w-[7%]'></div>
              <div>SESSION</div>
              <div className=' border-b w-[7%]'></div>
            </div>

          </div>

          <div className=' grid grid-cols-4 gap-10 w-[100%]'>
            <div className=' col-span-3 border'>
              <div className='  font-medium py-1 border-b '>PERFORMANCE SUMMARY</div>
              <div className=' flex border-b'>
                <div className=' w-[40%] p-3 text-left  border-r  '>Total Obtained</div>
                <div className=' w-[10%] border-r'></div>
                <div className=' w-[40%]  p-3 text-left border-r '>Percentage</div>
                <div className=' w-[10%] '>%</div>
              </div>
              <div className=' flex'>
                <div className=' w-[40%] p-3 text-left border-r '>Total Obtained</div>
                <div className=' w-[10%] border-r'></div>
                <div className=' w-[40%]  p-3 text-left border-r '>Percentage</div>
                <div className=' w-[10%] '>%</div>
              </div>
            </div>

            < div className=' '>
              <div className='   border border-black  h-full w-[90%]'>
              </div>
            </div>

          </div>
          <div className=' grid  grid-cols-7 border w-full font-medium   '>
            <div className=' border-r  py-2'>SUBJECTS</div>
            <div className=' border-r  py-2' >FIRST CA</div>
            <div className=' border-r  py-2'>SECOND CA</div>
            <div className=' border-r  py-2' >EXAM</div>
            <div className=' border-r  py-2'>TOTAL</div>
            <div className=' border-r  py-2'>GRADE</div>
            <div className=' py-2'>REMARKS</div>



          </div>

          <div className=' flex flex-col gap-4 '>
            <div className=' border-b-[3px] w-full text-left '>Teacher's Remark</div>
            <div className=' border-b-[3px] w-full text-left '>Teacher's Remark</div>


          </div>
        </div>
      </div>
    </div>
  )
}
