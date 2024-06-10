import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StudentDonut() {
  const data = {
    labels: ["Male", "Female"],
    datasets: [{
      data: [500, 900],
      backgroundColor: ['#00C7B4', '#0080F5'],
      borderColor: 'rgba(75, 192, 192, 0)',
      borderWidth: 1
    }],
  };

  const options = {
    cutout: '70%',
    radius: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
    <div className='bg-white-100 rounded-lg py-4 px-4'>
      <div className="text-xl font-semibold  items-center  ">
        Students
      </div>
      <div className="   ">
        <div className="  justify-center flex " >
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex items-center  justify-center">
          {data.labels.map((label, index) => (
            <div key={index} className="flex gap-2 items-center px-4 ">
              <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#00C7B4]' : 'bg-[#0080F5]'}`}></div>
              <div className="text-base font-medium items-center ">{label}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-16 justify-center">
          <div className="text-xs font-normal text-[#BABABA]">{data.datasets[0].data[0]}</div>
          <div className="text-xs font-normal text-[#BABABA]">{data.datasets[0].data[1]}</div>
        </div>
      </div>
      </div>
    </>
  );
}