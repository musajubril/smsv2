// options2.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { IoMdArrowDropdown } from 'react-icons/io';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      data: [800, 600, 340, 334, 400, 500, 400, 330, 221, 75, 500, 400],
      borderRadius: 10,
      backgroundColor: labels.map((month) => (month === 'Jun' ? 'rgba(0, 101, 194, 1)' : 'rgba(194, 226, 254, 1)')),
    },
  ],
};

const options = {
  plugins: {
    legend: {
        display: false,
    }
 
  },
};

const Barchart = () => {
  return (
    <>
      <div className="">
        <div className='p-4 rounded-lg bg-white-100 shadow'>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xs md:text-lg text-[#9291A5]'> Students</h1>
                <h1 className='text-sm md:text-xl text-[#000D19] font-semibold'>Total Students</h1>
              </div>
              <div>
                <div className='flex gap-5'>
                  <div className='py-2 flex text-[#000D19] text-xs md:text-sm font-medium items-center border-[#C2E2FF] rounded-lg border px-4 gap-1'>
                    Total
                    <h1 className='md:text-xl'> <IoMdArrowDropdown /></h1>
                  </div>
                  <div className='py-2 flex text-[#000D19] text-xs md:text-sm font-medium items-center border-[#C2E2FF] rounded-lg border px-4 gap-1'>
                    Yearly
                    <h1 className='md:text-xl'> <IoMdArrowDropdown /></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Barchart;
