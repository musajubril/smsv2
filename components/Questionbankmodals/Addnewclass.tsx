import React from 'react';
import Modal from '@/components/shared/reusablemodal/Modal';
import Input from '../shared/input/Input';
import Button from '@/components/shared/button/Button';


const AddNewclass = ({ isModalOpen, handleCloseModal, handleAddClass, setNewClassData, newClassData}) => {


  const uid = typeof window !== 'undefined' && localStorage.getItem("schoolId");
  console.log(uid)

  const handleAddClassClick = async () => {
    try {
      await handleAddClass();
      handleCloseModal();
    } catch (error) {
      console.error('Failed to add class:', error);
    }
  };



  const handleClassNameChange = (e) => {
    console.log(e)
    setNewClassData({
      ...newClassData,
      [e.target.name] : e.target.value

    });
  };

  

  return (
    <Modal action={handleCloseModal} open={isModalOpen}>
      <div className={`flex flex-col gap-5 w-[400px] overflow-y-scroll max-h-[400px] scrollbar-hidden`}>
        <div className='font-bold text-black text-xl flex justify-start'>Add New Class</div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg justify-start flex'>Class Name</h1>
            <Input 
              text={'Enter classname'} 
              name={'name'} 
              error={false} 
              size='large' 
              success={false} 
              disabled={false} 
              change={handleClassNameChange} 
              value={newClassData.name} 
            />
          </div>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg justify-start flex'>Class Fee</h1>
            <Input 
              text={'Enter class fee'} 
              name={'fee'} 
              error={false} 
              size='large' 
              success={false} 
              disabled={false} 
              change={handleClassNameChange} 
              value={newClassData.fee} 
            />
          </div>
          <Button text='Add Class' disabled={false} onClick={handleAddClassClick} size='small' intent='primary' />
        </div>
      </div>
    </Modal>
  );
};

export default AddNewclass;
