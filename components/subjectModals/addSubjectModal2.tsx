import Button from '@/components/shared/button/Button';
import Modal from '@/components/shared/reusablemodal/Modal';
import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";


const Courseadded = ({ isModalOpen, handleCloseModal, handleAddNewCourse }) => {


  return (
    <div className=' w-full'>
      <Modal action={handleCloseModal} open={isModalOpen}>
        <div className=' w-full  '>
          <div className=' flex flex-col gap-5 justify-center items-center'>
            <div className=' text-blue-100 text-5xl'><FaCheckCircle /></div>
            <div className=' text-xl font-bold text-black'>Subject Added</div>
            <div className=' text-gray-400'>Subject has been added successfully.</div>
            <div className=' flex gap-5 w-full px-4'>
              <div className=''>
                <Button text={'Okay'} disabled={false} onClick={handleCloseModal} intent='secondary' size='small' />
              </div>
              <div className=''>
                <Button text={'Add New'} disabled={false} onClick={handleAddNewCourse} intent='primary' size='small' />
              </div>

            </div>

          </div>

        </div>

      </Modal>
    </div>
  )

}
export default Courseadded;