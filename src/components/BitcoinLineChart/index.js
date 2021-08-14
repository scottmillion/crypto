import axios from 'axios';
import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  plugins: {
    legend: {
      display: false,
      
  }
  },
  elements: {
    point:{
        radius: 0
    },
    line: {
      tension: .4
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
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 14,
        maxRotation: 0,
        minRotation: 0
        
      },
      
    },
    
  },
};

class BitcoinLineChart extends React.Component {
  state = {
    dataPoints: [],
    dataLabels: [],
    gradient: ""
  }

  getPrices = async () => {
    try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=39&interval=daily`);
      
      const prices = data.prices;
      const dataPoints = [];
      const dataLabels = [];
      prices.forEach(price => {
        let myDay = new Date(price[0]).getDate().toString();
        if (myDay.length === 1) { myDay = "0" + myDay };
        dataLabels.push(myDay);
        dataPoints.push(price[1]);
      })
      this.setState({ dataPoints, dataLabels });
    } catch(error) {
      console.log("Error in getPrices API!");
      console.log(error);
    }
  }

  componentDidMount() {
    this.getPrices();
    

    const canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(65,69,71, 1)');   
    gradient.addColorStop(1, 'black');
    this.setState({gradient})
  }
  render(){
    const data = {
      labels: this.state.dataLabels,
      datasets: [
        {
          label: 'Price',
          data: this.state.dataPoints,
          fill: true,
          // backgroundColor: 'red',
          backgroundColor: this.state.gradient,
          // backgroundImage: 'linear-gradient(red, yellow)',
          // 414547
          borderColor: 'rgba(0, 255, 95, 0.56)',
          
        },
      ],
    };

  return(
  <>
    <Line data={data} options={options} />
  </>)};
};

export default BitcoinLineChart;
