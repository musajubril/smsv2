import React, { useState } from 'react';
import { BsBoxArrowInDownLeft } from 'react-icons/bs';
import Input from '../shared/input/Input';
import Button from '@/components/shared/button/Button';
import Select from '@/components/shared/select/Select';
import { AiOutlineImport } from 'react-icons/ai';
import Modal from '@/components/shared/reusablemodal/Modal';
import Link from 'next/link';

export default function Uploadquestion () {
   const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
  const classOptions = ['JSS 1', 'JSS 2', 'JSS 3', 'SSS 1', 'SSS 2', 'SSS 3'];
  const subjectOptions = ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology', 'Civiv Education', 'Social Studies', 'Computer Science'];
  const termOptions = ['First', 'Second', 'Third'];

  const [fileName, setFileName] = useState('');
  const handlefile = (e: any) => {
    setFileName(e.target.files[0].name);
  };
  
  const[state, setState ] = useState()
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = () => {
    
  };
  return (
    <div className=''>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal action={handleCloseModal} open={isModalOpen} >
      
      <div className='   gap-5 flex flex-col w-[350px] '>
        <div className='font-bold text-black text-xl flex justify-start'>Upload Question</div>
        <div className='flex flex-col  gap-3'>
          <div className='flex flex-col w-full '>
            <h1 className='font-bold text-lg flex justify-start'>Class</h1>
            {/* <Select options={classOptions} placeholder="Select Class" change={handleChange} text="class" setState={setState} name="class" state={state} /> */}
          </div>
          <div className='flex flex-col w-full '>
            <h1 className='font-bold text-lg flex justify-start'>Subject</h1>
            {/* <Select options={subjectOptions} placeholder="Select Subject" change={handleChange} text="subject" setState={setState} name="subject" state={state} /> */}
          </div>
          <div className='flex flex-col w-full '>
            <h1 className='font-bold text-lg flex justify-start'>Term</h1>
            {/* <Select options={termOptions} placeholder="Select Term" change={handleChange} text="term" setState={setState} name="term" state={state} /> */}
          </div>
          <div className='flex flex-col w-full '>
            <h1 className='font-bold text-lg flex justify-start'>Topic</h1>
            <Input
              text={'Enter Topic'}
              name={'Username'}
              error={false}
              success={false}
              disabled={false}
              size='large'
              value={undefined}
              change={(event: React.ChangeEvent<HTMLInputElement>): void => {}}
            />
          </div>
        </div>
        <div
          className="bg-slate-100 rounded-lg py-3 w-full  flex flex-col gap-3 items-center justify-center"
          onClick={() => document.getElementById("input-file")?.click()}
        >
          <input
            className="hidden"
            type="file"
            accept=".pdf, .doc, .txt"
            id="input-file"
            onChange={handlefile}
          />
          {fileName ? (
            <div className="font-bold text-[#878787] text-lg"> {fileName} </div>
          ) : (
            <>
              <div className='bg-slate-200 p-2 rounded-full items-center text-black text-lg'>
                <BsBoxArrowInDownLeft />
              </div>
              <div className='text-gray-800 text-sm'>
                <button className='text-blue-100'>click to upload</button> or drag and drop
              </div>
              <div className='text-[#878787] text-sm'>PDF, DOC, or TXT.</div>
              <div className='text-[#878787] text-sm'>OR</div>
              <div>
              <Button text='Browse files' disabled={false} onClick={undefined} size='small' intent='primary' />
              </div>
            </>
          )}
        </div>
        <Link href={'Questionuploaded'}>
          <Button text='Upload Question' disabled={false} onClick={undefined} size='small' intent='primary' />
          </Link>
      </div>
   
      </Modal>
    </div>
  );
};
