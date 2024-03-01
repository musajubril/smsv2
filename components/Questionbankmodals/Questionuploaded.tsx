import Button from '@/components/shared/button/Button';
import Modal from '@/components/shared/reusablemodal/Modal';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Modal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal action={handleCloseModal} open={isModalOpen}>
        <div className='w-[300px] items-center justify-center flex '>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='text-blue-100 text-5xl'><FaCheckCircle /></div>
            <div className='text-xl font-bold text-black'>Successful</div>
            <div className='text-gray-400'>Question uploaded Successfully</div>
            <div className='flex gap-5 w-full '>
              <div className=''>
                <Button text={'Okay'} disabled={false} intent='secondary' size='small' onClick={undefined} />
              </div>
              <div className=''>
                <Button text={'Add New'} disabled={false} intent='primary' size='small' onClick={undefined} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Modal2;
