import React, { useState } from 'react';
import { BsBoxArrowInDownLeft } from 'react-icons/bs';
import Input from '../shared/input/Input';
import Button from '@/components/shared/button/Button';
import Select from '@/components/shared/select/Select';
import Multiselect from '@/components/shared/select/Multiselect';
import Modal from '@/components/shared/reusablemodal/Modal'; 
import Link from 'next/link';

const AddNewclass = () => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
  
  const subjectOptions = ['Mathematics', 'English Language', 'Biology', 'Chemistry', 'Physics', 'Agricultural science', 'Literature', 'Information Technology', 'Civic Education'];
 

  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  

  return (
    <div  className=''>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal action={handleCloseModal} open={isModalOpen}  >
      <div className={`flex flex-col gap-5 w-[400px]  overflow-y-scroll max-h-[400px] `}>
          <div className='font-bold text-black text-xl flex justify-start'>Upload Question</div>
          <div className='flex flex-col gap-3'>
            <div className=' flex flex-col w-full '>
              <h1 className=' font-bold text-lg justify-start flex'>ClassName</h1>
              <Input text={'Enter classname'} name={''} error={false} size='large' success={false} disabled={false} change={function (): void {
              }} value={undefined} />
            </div>
            <div className=' flex flex-col w-full '>
              <h1 className=' font-bold text-lg justify-start flex'>Subject</h1>
              <div  ><Multiselect options={subjectOptions} placeholder={'Enter Subject'}   /></div>
            </div>
            <Link href={'Classadded'}>
            <Button text='Upload Question' disabled={false} onClick={undefined} size='small' intent='primary' />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewclass;
