import Academic_performance from '@/components/CA.report/Academic_performance'
import Footer from '@/components/CA.report/Footer'
import Grade from '@/components/CA.report/Grade'
import Header from '@/components/CA.report/Header'
import Observable_behaviour from '@/components/CA.report/Observable_behaviour'
import Skills_Dev from '@/components/CA.report/Skills_Dev'
import Student_data from '@/components/CA.report/Student_data'
import React from 'react'

export default function reportcard1() {
  return (
    <div className=' py-5  flex w-full items-center justify-center text-center  '>
      <div className='max-w-[70%] flex flex-col gap-3'>
        <Header />
        <Student_data />
        <Observable_behaviour />
        <Skills_Dev />
        <Grade />
        <Academic_performance />
        <Footer />
      </div>
    </div>
  )
}
