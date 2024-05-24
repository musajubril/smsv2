import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/shared/reusablemodal/Modal';
import Input from '../shared/input/Input';
import Button from '@/components/shared/button/Button';
import Multiselect from '@/components/shared/select/Multiselect';
import { getRequest } from '@/api/apiCall';
import { GET_COURSES } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';

const AddNewclass = ({ isModalOpen, handleCloseModal, handleAddClass }) => {
  const [className, setClassName] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);

  const uid = typeof window !== 'undefined' && localStorage.getItem("schoolId");

  const { data: subjectData } = useQuery({
    queryKey: [queryKeys.getStudents, uid],
    queryFn: async () => await getRequest({ url: GET_COURSES(uid) }),
    enabled: !!uid,
  });

  useEffect(() => {
    if (subjectData?.data) {
      const options = subjectData.data.map(course => ({ value: course.id, label: course.name }));
      setSubjectOptions(options);
    }
  }, [subjectData]);

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleSubmit = () => {
    handleAddClass(className, selectedSubjects);
  };

  return (
    <Modal action={handleCloseModal} open={isModalOpen}>
      <div className={`flex flex-col gap-5 w-[400px] overflow-y-scroll max-h-[400px]`}>
        <div className='font-bold text-black text-xl flex justify-start'>Add New Class</div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg justify-start flex'>ClassName</h1>
            <Input 
              text={'Enter classname'} 
              name={'classname'} 
              error={false} 
              size='large' 
              success={false} 
              disabled={false} 
              change={handleClassNameChange} 
              value={className} 
            />
          </div>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg justify-start flex'>Subject</h1>
            {subjectOptions.length > 0 ? (
              <div>
                <Multiselect 
                  options={subjectOptions} 
                  placeholder={'Enter Subject'} 
                  state={selectedSubjects} 
                  setState={setSelectedSubjects} 
                />
              </div>
            ) : (
              <div>Loading subjects...</div>
            )}
          </div>
          <Button text='Add Class' disabled={false} onClick={handleSubmit} size='small' intent='primary' />
        </div>
      </div>
    </Modal>
  );
};

export default AddNewclass;
