import React, { useState } from 'react';
import { BsBoxArrowInDownLeft } from 'react-icons/bs';
import Input from '../shared/input/Input';
import Button from '@/components/shared/button/Button';
import { getRequest } from '@/api/apiCall';
import { GET_COURSES } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import { useQuery } from '@tanstack/react-query';
import Multiselect from '@/components/shared/select/Multiselect';
import Modal from '@/components/shared/reusablemodal/Modal'; 
import Link from 'next/link';

const AddNewclass = ({ isModalOpen, handleCloseModal, handleAddClass }) => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
  // const subjectOptions = ['Mathematics', 'English Language', 'Biology', 'Chemistry', 'Physics', 'Agricultural science', 'Literature', 'Information Technology', 'Civic Education'];

  
  const [subjectOptions, setSubjectOptions] = useState([]);

  const uid = typeof window !== 'undefined' && localStorage.getItem("schoolId");
  console.log(uid);

  const { data:subjectData } = useQuery({
    queryKey: [queryKeys.getStudents, uid],
    queryFn: async () => await getRequest({ url: GET_COURSES(uid) }),
    enabled: !!uid,
  });

  console.log(subjectData?.data);

  React.useEffect(() => {
    if (subjectData?.data) { // Check for data existence
      const options = subjectData.data.map(course => course.name);
      setSubjectOptions(options);
      console.log('subjectOptions after setting:', subjectOptions);
    }
  }, [subjectData]);
  console.log('subjectOptions:', subjectOptions);

  return (
    <Modal action={handleCloseModal} open={isModalOpen}>
      <div className={`flex flex-col gap-5 w-[400px] overflow-y-scroll max-h-[400px]`}>
        <div className='font-bold text-black text-xl flex justify-start'>Add New Class</div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg justify-start flex'>ClassName</h1>
            <Input text={'Enter classname'} name={''} error={false} size='large' success={false} disabled={false} change={() => {}} value={undefined} />
          </div>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg justify-start flex'>Subject</h1>
            {subjectOptions.length > 0 ?

            <div><Multiselect options={subjectOptions} placeholder={'Enter Subject'} /></div>
            : (
              <div></div>
            )
            }
          </div>
          <Button text='Add Class' disabled={false} onClick={handleAddClass} size='small' intent='primary' />
        </div>
      </div>
    </Modal>
  );
};

export default AddNewclass;
