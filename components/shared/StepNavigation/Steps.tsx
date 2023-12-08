import React, { useState } from 'react'

export default function Steps() {
  const [page, setPage] = useState(1)
  return (
    <div className=' w-[406px] h-[1117px] bg-white-100 justify-center p-3 m-6 rounded-xl border border-[#E4E7EC]'>
      <div className=' flex'>
        <div className=' flex gap-3 flex-col'>
          {
            [1, 2, 3].map(num => (
              <div className={`border border-gray-600 rounded-full h-10 w-10 flex items-center text-gray-500 justify-center ${num === page || page > num ? "bg-blue-100 text-white-100" : " "}`} key={num}>
                {page > num ? (<span className=' text-white-200'>&#10003;</span>) : (num)}
              </div>
            ))
          }

          
        </div>


<div className=' ml-5 flex flex-col gap-3'>
        <div className=' '>
        {
            [1].map(text => (
              <div className={` flex flex-col  ${text === page || page > text ? " text-black" : "text-blue-100 "}`} key={text}>  
              <h1 className=" font-semibold text-base">Personal Information</h1>
              <p className=" text-xs text-gray-400">Fill out these details and get your campaign ready</p>
              
              </div>
            ))
          }
        </div>

        <div className=' '>
        {
            [2].map(text => (
              <div className={` flex flex-col ${text === page || page > text ? " text-black" : "text-gray-400 "}`} key={text}>  
              <h1 className=" font-semibold text-base">Role Details</h1>
        <p className=" text-xs text-gray-400">Enter the basic information about the role.</p>
              </div>
            ))
          }
        </div>

        <div className=' '>
        {
         [3].map(text => (
          <div className={` flex flex-col ${text === page || page > text ? " text-black" : "text-gray-400"}`} key={text}>  
          <h1 className=" font-semibold text-base">Preview</h1>
        <p className=" text-xs text-gray-400">Confirm if the details you inputed is correct.</p>
          </div>
            ))
          }
        </div>
        </div>
      </div>

      <div className=' flex gap-5 items-center ml-16 mt-6'>
        <div className=' bg-blue-400 rounded px-4 py-2 text-white-100'>
          <button onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }}>
            Previous
          </button>
        </div>

        <div className=' bg-blue-400 rounded px-4 py-2 text-white-100 '>
          <button onClick={() => {
            if (page < 3) {
              setPage(page + 1)
            }
          }}>
            Next
          </button>
        </div>
      </div>

    </div>
  )
}
