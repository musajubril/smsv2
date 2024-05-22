import Button from '@/components/shared/button/Button';
import Modal from '@/components/shared/reusablemodal/Modal';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Classadded = ({ isModalOpen, handleCloseModal }) => {
  return (
    <div>
      <Modal action={handleCloseModal} open={isModalOpen}>
        <div className='w-full'>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='text-blue-100 text-5xl'><FaCheckCircle /></div>
            <div className='text-xl font-bold text-black'>Class Added</div>
            <div className='text-gray-400'>“SSS 1A” class has been added successfully.</div>
            <div className='flex gap-5 w-full px-4'>
              <div className='w-full'>
                <Button text={'Okay'} disabled={false} onClick={handleCloseModal} intent='secondary' size='small' />
              </div>
              <div className='w-full'>
                <Button text={'Add New'} disabled={false} onClick={handleCloseModal} intent='primary' size='small' />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Classadded;
