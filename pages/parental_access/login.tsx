import React from 'react'
import Button from '../../components/shared/button/Button'
import Input from '../../components/shared/input/Input'
import PasswordInput from '@/components/shared/input/Passwordinput'
import Link from "next/link";


export default function Onboarding () {
  return (
    <div className='  '>
    <div className=' md:bg-[#F9FAFB] bg-white-100  h-screen '>
        <div className=' flex justify-center items-center flex-col px-4 h-screen '>
          <h1 className=' text-2xl text-[#0065C2] font-bold pb-10'>SMS</h1>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className=' flex md:hidden'><img src="/emoji.png" alt="" className=' w-20 h-20' /></div>
            <div className=' flex flex-col gap-2 text-center '>
                <h1 className='text-xl md:text-3xl font-semibold text-[BABABA]'><span className='text-[#000D19]'>Login.</span>Parents/Guardian</h1>
                <p className=' text-sm md:text-lg'>Thank you for bringing your wards/children to our school</p>

            </div>
            <div className=' w-full flex flex-col gap-5'>
            <div className=' flex flex-col'>
            <div className=' text-sm md:text-lg'>Username:</div>
            <Input text={'Enter Subject'} name={'Username'} error={false} success={false} disabled={false} size='large' value={undefined} change={function (event: React.ChangeEvent<HTMLInputElement>): void {
           
                } }  />
                  </div>
                  <div>
          <div className='text-sm md:text-lg'>Password:</div>
          <div className=''>
                <PasswordInput text={'Enter Password'} name={''} size='large' change={undefined} value={undefined} disabled={false} error={false} success={false}  />
                </div>
                </div>
                <Link href={'/parental_access/profile'}>
                <Button text={'Login'} disabled={false} onClick={undefined} intent='primary' size='base' /></Link>
        </div>

          </div>
          <div className='pt-3 font-semibold text-base '>Forgot your password?
          <Link href={'/parental_access/forgotpassword'} className=' text-blue-100'>
          Reset Here
          </Link>
          </div>

        </div>
    </div>
    </div>
  )
}
