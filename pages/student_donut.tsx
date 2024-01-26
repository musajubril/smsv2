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
    cutoutPercentage: 100,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
    <div className=''>
      <div className="text-xl font-semibold px-6 pt-6 items-center  bg-white-100">
        Students
      </div>
      <div className=" pt-4  ">
        <div className=" w-[80%] h-[50%] justify-center flex" >
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex items-center pt-4">
          {data.labels.map((label, index) => (
            <div key={index} className="flex gap-2 items-center px-4">
              <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#00C7B4]' : 'bg-[#0080F5]'}`}></div>
              <div className="text-base font-medium items-center">{label}</div>
            </div>
          ))}
        </div>
        <div className="flex px-8 gap-16">
          <div className="text-xs font-normal text-[#BABABA]">{data.datasets[0].data[0]}</div>
          <div className="text-xs font-normal text-[#BABABA]">{data.datasets[0].data[1]}</div>
        </div>
      </div>
      </div>
    </>
  );
}