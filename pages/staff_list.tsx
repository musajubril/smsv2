import react from 'react'
import Layout from "@/components/shared/dashboardLayout/Layout";
import Button from '@/components/shared/button/Button';
import StaffDropdown from '@/components/shared/dropdown/StaffDropdown';
import Search from '@/components/Search';
import StaffList from '@/components/StaffList';


export default function staff_list() {



  return (
    <div>
      <Layout>

        <div className=' flex gap-3 flex-col w-full' >
          <div className=' flex items-center justify-between '>
            <h1 className='text-black text-2xl font-semibold'>Staff</h1>
          {/* <Button text={'+ Add New Staff'} intent="primary" disabled={false} onClick={undefined} size='small'/> */}
            <h1>btn here</h1>
          </div>
          <div>      
            <Search />
         </div>

        <StaffList  />
          
        </div>
    
      </Layout>
    </div>
  );
}

