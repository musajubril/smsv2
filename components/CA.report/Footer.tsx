import React from 'react'

export default function Fotter() {
  return (
    <div> 
       <div className=' w-full gap-1 flex flex-col'>
        
    <div className=' border w-full font-medium'>REMARKS AND CONCLUSION</div>
    <div className=' border w-full p-2 '>
      <div className=' flex gap-5'>
        <div className=' w-[70%] px-1'>
          <div className=' text-start'>Class Teachers comments</div>
          <div className=' border py-12 rounded-lg '></div>

        </div>
        <div className=' flex flex-col justify-between'>
          <div>Signature (Class Teacher)</div>
          <div className=' border-b w-full'></div>
        </div>
      
      </div>          

    
    <div className='text-left'>
    <div>Principal's comments</div>
    <div className=' flex gap-5 w-full'>
      <div className=' w-[70%] '>
      <div className=' border p-2 flex items-center rounded-lg'>
        <div className=' border bg-gray-300 py-3 px-8 text-xl'>PASSED</div>

        <div className=' text-xl pl-2 font-semibold'>Very good academic performance</div>

      </div> 
      <div className=' flex gap-5'>
        <div>parents Nsme</div>
        <div>MR/Mrs Akinwande</div>

      </div>
      </div>
      <div className=' flex flex-col justify-between'>
          <div>Signature/School stamp</div>
          <div className=' border-b w-full'></div>
        </div>

        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
