import Barchart1 from '@/components/shared/Charts/Barchart_students'
import Barchart from '@/components/shared/Charts/Barchart_students'
import Barchart2 from '@/components/shared/Charts/Barchart_class'
import Cards from '@/components/shared/card/Cards'
import Layout from '@/components/shared/dashboardLayout/Layout'
import React from 'react'
import StaffDoughnut from '@/components/shared/Charts/staff_doughnut'
import StudentDonut from '@/components/shared/Charts/student_donut'
// import StudentDonut from './student_donut'
// import StaffDoughnut from './staff_doughnut'

export default function index() {
  return (
    <div>
      <Layout>
        <div className=' '>
          <div className='grid grid-cols-4 gap-5 '>
            <div className=' col-span-3 flex flex-col gap-4'>
              <Cards />
              <Barchart1/>
              <Barchart2 />


            </div>
            <div className=' flex flex-col gap-3'>

             
              <StudentDonut />
            

              <StaffDoughnut />
            </div>

          </div>

        </div>
      </Layout>
        
    </div>
  )
}
