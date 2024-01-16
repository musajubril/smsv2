// options2.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

const options = {};

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
  options: {},
};

const Barchart = () => {
  return <Bar options={options} data={data} />;
};

export default Barchart;
