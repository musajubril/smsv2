import React from 'react'

export default function Student_data() {
  return (
    <div>
         <div className=' grid grid-cols-2 gap-20 w-full '>
        <div className='  w-full flex flex-col gap-1'>
          <div className=' w-full border border-black font-medium'>STUDENT'S PERSONAL DATA</div>
         <div className=' grid grid-cols-3 grid-rows-5 border '>

          <div className=' border-r border-b '>NAME</div>
          <div className=' col-span-2 border-b  font-medium'>Jubril Musa</div>

          <div className=' border-r border-b '>OTHER NAME</div>
          <div className=' col-span-2 border-b font-medium'></div>

          <div className=' border-r border-b '>ADMISSION NO</div>
          <div className=' col-span-2 border-b font-medium'>1234567AB</div>

          <div className=' border-r border-b '>GENDER</div>
          <div className=' col-span-2 border-b font-medium'>Male</div>

          <div className=' border-r border-b '>CLASS</div>
          <div className=' col-span-2 border-b font-medium'>JSS 3</div>

          <div className=' border-r  '>BARCODE</div>
          <div className=' col-span-2 font-medium '></div>

         </div>
        </div>

        <div className=' flex flex-col gap-5'>
          <div className='  w-full border'>
            <div className=' border-b items-center font-medium'>ATTENDANCE</div>
            <div className=' grid grid-cols-3 grid-rows-2'>

              <div className=' border-b border-r'>Times Sch Opened</div>
              <div className=' border-r border-b '>Times Present</div>
              <div className=' border-b'>Times Absent</div>

              <div className=' border-r '>58</div>
              <div className=' border-r '>55</div>
              <div className='  '>3</div>

            </div>
                 </div>
                 <div className='  w-full border'>
            <div className=' border-b items-center font-medium'>TERM DURATION (....) WEEKS</div>
            <div className=' grid grid-cols-3 grid-rows-2'>

              <div className=' border-b border-r'>Term Begins</div>
              <div className=' border-r border-b '>Term Ends</div>
              <div className=' border-b'>Next Term Begins</div>

              <div className=' border-r '>28-07-2024</div>
              <div className=' border-r '>22-11-2024</div>
              <div className='  '>NA</div>
            </div>
                 </div>
        

        </div>
         
      </div>
    </div>
  )
}
