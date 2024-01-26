// options2.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,} from 'chart.js';
import { IoMdArrowDropdown } from 'react-icons/io';

ChartJS.register(CategoryScale,LinearScale, BarElement,);
const options = {
  plugins: {
    legend: {
        display: false,
    }
 
  },
  
};

const labels = ['Jss1', 'Jss2', 'Jss3', 'SSS1', 'SSS2', 'SSS3'];

const data = {
  labels,
  datasets: [
    {
      data: [800, 600, 1800, 1000, 400, 500],
      backgroundColor: 'rgba(0, 0, 255, 80)',
      borderRadius: 10,
    },
  ],
 
};


const Barchart = () => {
  return (
    <>
    <div className="">
    <div className=' p-4 rounded-lg bg-white-100 shadow'>
        <div className=' flex flex-col gap-5'>
          <div className=' flex justify-between'>
            <div className=' flex flex-col gap-2'>
              <h1 className='text-lg text-[#9291A5]'> Students</h1>
              <h1 className='text-xl text-[#000D19] font-semibold'>Total by class</h1>
            </div>
           <div className=""> 
           <div className='  flex text-[#000D19] py-2 text-xs md:text-sm font-medium items-center  border-[#C2E2FF] rounded-lg border px-4 gap-1
            4 '>
            Total
            <h1 className='md:text-xl'> < IoMdArrowDropdown  /></h1>
            </div></div>
          </div> 
            </div>
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};
export default Barchart;
