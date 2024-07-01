import React from 'react'

export default function Footer({classNo,comments,teacher_remark}) {
  return (
    <div>
    <div className='flex flex-col gap-7 font-medium'>
  <div className='flex w-full items-baseline'>
    <div className=' text-lg'>Number of Students</div>
    <div className='flex-grow border-b-2 ml-2 text-center'>{classNo}</div>
  </div>
  <div className='flex w-full items-baseline'>
    <div className=' text-lg'>Class Teacher's Comments</div>
    <div className='flex-grow border-b-2 ml-2'>{teacher_remark}</div>
  </div>

  <div className='grid grid-cols-3 items-baseline'>
    <div className='border-b col-span-2'></div>
    <div className='flex w-full items-baseline'>
      <div className=' text-lg pl-2'>Signature</div>
      <div className='flex-grow border-b-2 ml-2'></div>
    </div>
  </div>

  <div className='flex w-full items-baseline'>
    <div className=' text-lg pr-2'>Headmaster's/Headmistress's Comments</div>
    <div className='flex-grow border-b-2 ml-2'>{comments}</div>
  </div>

  <div className='grid grid-cols-3 items-baseline'>
    <div className='border-b col-span-2'></div>
    <div className='flex w-full items-baseline'>
      <div className=' text-lg'>Signature</div>
      <div className='flex-grow border-b-2 ml-2'></div>
    </div>
  </div>

  <div className='grid grid-cols-3 items-baseline'>
    <div className='border-b col-span-2'></div>
    <div className='flex w-full items-baseline pl-2'>
      <div className=' text-lg'>Signature</div>
      <div className='flex-grow border-b-2 ml-2'></div>
    </div>
  </div>
</div>

    </div>
  )
}

