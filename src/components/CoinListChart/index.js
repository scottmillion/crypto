import React from 'react';
import { Line } from 'react-chartjs-2';

const arr = new Array(170).fill('');

const data = {
  labels: arr,
  datasets: [
    {
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,  
    },
  },
  elements: {
    point:{
        radius: 0
    },
    line: {
      tension: .5
    }
  },
  scales: {
    y: {

      ticks: {
        display: false
      }
    },
    x: {

      ticks: {
        display: false
      }
    },
  },
};

const CoinListChart = (props) => {
  data.datasets[0].data = props.prices;
  return <Line data={data} options={options} />;
}

export default CoinListChart;

