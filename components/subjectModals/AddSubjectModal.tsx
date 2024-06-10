import React, { useState } from 'react';
import Input from '../shared/input/Input';
import Multiselect from '@/components/shared/select/Multiselect';
import Modal from '@/components/shared/reusablemodal/Modal';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/queryKey';
import { HOMEROOMS } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import Button from '../shared/button/Button';


const Addnewcourse = ({ isModalOpen, handleCloseModal, handleAddCourse, handlechange, subject, setSubject }) => {

  const id: any = typeof window !== 'undefined' && localStorage.getItem("schoolId")
  const { data: classData } = useQuery({
    queryKey: [queryKeys.getstudent],
    queryFn: async () => await getRequest({ url: HOMEROOMS(id) })
  })


  const [classes, setClasses] = React.useState([])

  React.useEffect(() => {
    setClasses(classData?.data)
  }, [classData])

  const mappedClasses = classes?.map((cls) => {
    return {
      label: cls.name,
      value: cls.id
    }
  })

  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    console.log(subject)
    setSubject({
      ...subject,
      class_ids: state.map(st => st.value)
    })
  }, [state])


  return (
    <div className=''>
      <button onClick={isModalOpen} ></button>
      <Modal action={handleCloseModal} open={isModalOpen}  >
        <div className={`flex flex-col gap-5 w-full   `}>
          <div className='font-semibold text-black text-xl flex justify-start'>Add New subject</div>
          <div className='flex flex-col gap-3'>
            <div className=' flex flex-col w-full '>
              <h1 className=' font-medium text-base justify-start flex'>subject name</h1>
              <Input text={'Enter subject name'} name={'name'} error={false} size='large' success={false} disabled={false} change={handlechange} value={undefined} />
            </div>
            <div className=' flex flex-col w-full '>
              <h1 className=' font-medium text-base justify-start flex'>Classes</h1>
              {classes &&
                <div><Multiselect options={mappedClasses} placeholder={'select classes'} state={state} setState={setState}  /></div>
              }
            </div>
            <Button text='Upload Subject' disabled={false} onClick={handleAddCourse} size='small' intent='primary' />

          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Addnewcourse;


