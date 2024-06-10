import React, { useState } from 'react';
import { CiBellOn } from 'react-icons/ci';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiCircleCheck } from 'react-icons/ci';
import Button from '@/components/shared/button/Button';

export default function Onboarding() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const Cards = [
    {
      image: "/Avatars (1).png",
      name: "Bolaji AbdulQowiyy",
      class: "Senior Secondary 3",
      icon: <CiCircleCheck />,
    },
    {
      image: "/Avatars (1).png",
      name: "Bolaji AbdulQowiyy",
      class: "Senior Secondary 3",
      icon: <CiCircleCheck />,
    },
    {
      image: "/Avatars (1).png",
      name: "Bolaji AbdulQowiyy",
      class: "Senior Secondary 3",
      icon: <CiCircleCheck />,
    },
  ];

  return (
    <div className='h-screen md:bg-[#F9FAFB] bg-white-100'>
      <div className='justify-evenly items-center flex md:block flex-col h-full'>
        <div className='md:justify-between justify-center flex px-14 py-2'>
          <div className='text-[#0065C2] text-xl font-bold '>SMS</div>
          <div className='hidden md:flex gap-3 items-center'>
            <div className='text-lg items-center bg-[#F0F2F5] p-1 rounded-full'>
              <CiBellOn />
            </div>
            <div className='flex gap-2 border border-[#D4D4D4] py-1 px-2 shadow items-center rounded-lg'>
              <div className='w-8 h-8'>
                <img src="/Avatars (1).png" alt="" />
              </div>
              <div>Bolaji.A</div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>

        <div className='sm:block md:flex justify-center items-center h-[70%]'>
          <div className='flex flex-col gap-4 items-center px-3'>
            <div className='h-16 w-16'>
              <img src="/emoji.png" alt="" />
            </div>
            <div className='flex flex-col gap-2 items-center text-center'>
              <div className='text-[#000D19] md:text-3xl text-xl font-semibold'>Welcome Mr Adam</div>
              <div className='text-gray-100 text-sm md:text-lg'> Thank you for bringing your wards/children to our school</div>
            </div>
            <div className='flex flex-col gap-3 w-full px-3 '>
              {Cards.map((info, index) => (
                <div className='relative' key={index}>
                  <div
                    onClick={() => handleClick(index)}
                    className={`bg-white-100 py-2 flex gap-3 items-center px-3 rounded-lg ${
                      selectedIndex === index ? 'border border-blue-200' : ''
                    }`}
                  >
                    <div className='w-12 h-12'>
                      <img src={info.image} alt="" />
                    </div>
                    <div className='flex flex-col'>
                      <div className='text-[#878787] md:text-xl text-base font-semibold'>{info.name}</div>
                      <div className='text-[#878787] md:text-base text-sm font-medium '>{info.class}</div>
                    </div>
                  </div>
                  {selectedIndex === index && (
                    <div className='absolute right-5 bottom-[40%] text-blue-100 text-xl'>
                      {info.icon}
                    </div>
                  )}
                </div>
              ))}
              {selectedIndex !== null && (
                <div className='w-full'>
                  <Button text={'View academic record'} disabled={false} onClick={undefined} intent='primary' size='small' />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
