import Button from '@/components/shared/button/Button'
import PasswordInput from '@/components/shared/input/Passwordinput'
import React from 'react'

export default function Onboarding2() {
  return (
    <div className=' md:bg-[#F9FAFB] bg-white-100 h-screen p-5 justify-center flex '>
        <div className=' max-w-sm flex flex-col w-full justify-around h-[55%] ' >
            <h1 className='text-[#0065C2] text-2xl font-bold flex justify-center '>SMS</h1>
            <div className=' justify-center items-center flex gap-5  flex-col'>
               <div className=' md:flex gap-2 flex-col text-center hidden'>
               <h1 className='md:text-3xl text-xl font-semibold  '><span className='text-[#000D19]'>Login.</span>Forgot Password</h1>
                <p className='text-sm md:text-base text-gray-100'>You can reset your Password here</p>
               </div>
               <div className=' w-full '>
               <p className='text-gray-100 text-xs md:text-base font-semibold'>
                 <span className='hidden md:inline'>Username:</span>
                 <span className='inline md:hidden'>Guardian ID</span> 
                </p>
                <div className=''>
                <PasswordInput text={'Enter Subject'} name={''} size='large' change={undefined} value={undefined} disabled={false} error={false} success={false} />
              
                </div>
               </div>
               <div className=' w-full'>
               <Button text={'Forgot Password'} disabled={false} onClick={undefined} intent='primary' size='base' />
               </div>

            </div>
            
        </div>
    </div>
  )
}
