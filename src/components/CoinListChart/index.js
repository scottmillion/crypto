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
  const data = {
    labels: new Array(props.prices.length).fill(''),
    datasets: [
      {
        fill: false,
      },
    ],
  };
  data.datasets[0].data = props.prices;
  data.datasets[0].borderColor = `${props.priceChange < 0 ? "#FE1040" : "#00FC2A"}`;
  return <Line data={data} options={options} style={{backgroundColor: "#191B1F"}}/>;
}

export default CoinListChart;

