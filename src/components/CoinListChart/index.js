import React from 'react';
import { Line } from 'react-chartjs-2';



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
      grid: {
        display: false,
        drawTicks: false
      },
      ticks: {
        display: false,
      }
    },
    x: {
      grid: {
        display: false,
        drawTicks: false
      },
      ticks: {
        display: false,
        
      },
      
    },
    
  },
};

const CoinListChart = (props) => {
  const arr = new Array(170).fill('');
  
  const data = {
    labels: arr,
    datasets: [
      {
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };
  data.datasets[0].data = props.prices;
  return <Line data={data} options={options} style={{backgroundColor: "#191B1F"}}/>;
}

export default CoinListChart;

