import React, { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";

export default function Steps() {
  const nav = [
    {
      title: "Personal Information",
      description: "Fill out these details and get your campaign ready",
    },
    {
      title: "Parent Information",
      description: "Get full control over your audience",
    },
    {
      title: "Academic Information",
      description: "Get full control over your audience",
    },
  ];

  const [page, setPage] = useState(1);
  return (
    <div className='p-5 '>
          <div className='bg-white-100 h-screen md:w-[28%] w-full p-5 rounded-lg border border-[#EDEDED] '>
            <div className='flex flex-col gap-6 pb-10 '>
              {[1, 2, 3].map((num) => (
                <div className='flex gap-3 items-center' key={num}>
                  <div className={`border border-[#D4D4D4] w-12 h-12 justify-center items-center flex rounded-full text-[#BABABA] text-lg font-semibold ${num===page || page>num ? "bg-[#0065C2] text-white-300" : ""}`}>
                    {page>num ? <AiOutlineCheck /> : num}
                  </div>
                  <div>
                    <h1 className={` text-base font-semibold ${page<num ? " text-[#878787]" : "text-black"} `}>
                      {nav[num - 1].title}
                    </h1>
                    <p className={` text-xs  ${page<num ? " text-[#bababa]" : "text-[#878787]"}`}>
                      {nav[num - 1].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
           <div className=' flex justify-center items-center gap-5'>
           <button className='bg-blue-500 rounded px-10 py-2 text-white-100 text-center cursor-pointer' onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }}>
            previous
           </button>
           <button className={`bg-blue-500 rounded px-10 py-2 text-white-100 text-center cursor-pointer`}onClick={() => {
            if (page < 3) {
              setPage(page + 1)
            }
          }} >
            {page < 3 ? 'Next' : 'Submit'}
           </button>
           </div>
          </div>        
    </div>
  );
}
