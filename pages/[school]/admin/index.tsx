import Barchart1 from '@/components/shared/Charts/Barchart_students'
import Barchart2 from '@/components/shared/Charts/Barchart_class'
import Cards from '@/components/shared/card/Cards'
import Layout from '@/components/shared/dashboardLayout/Layout'
import React from 'react'
import StaffDoughnut from '@/components/shared/Charts/staff_doughnut'
import StudentDonut from '@/components/shared/Charts/student_donut'

export default function index() {
  return (
    <div>
      <Layout>
        <div className=' w-full h-full'>
          <div className='md:grid grid-cols-4 gap-5 flex flex-col  w-full '>
            <div className='md:col-span-3 w-full flex flex-col gap-4'>
                <Cards />
                <div>
                <Barchart1 />
                <Barchart2 />
                </div>
              </div>
            <div className='flex flex-col gap-10 w-full   '>
              <StudentDonut />
              <StaffDoughnut />
            </div>
            </div>
          </div>
   
      </Layout>
    </div>
  )
}
