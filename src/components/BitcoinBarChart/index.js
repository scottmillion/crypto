import axios from 'axios';
import React from 'react';
import { Bar } from 'react-chartjs-2';


const options = {
  plugins: {
    legend: {
      display: false,
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
        
      },
      
    },
    
  },
};


class BitcoinBarChart extends React.Component {
  state = {
    dataPoints: [],
    dataLabels: [],
    gradient: ""
  }

  getPrices = async () => {
    try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=22&interval=daily`);
      console.log(data);
      const volumes = data.total_volumes;
      const dataPoints = [];
      const dataLabels = [];
      volumes.forEach(volume => {
        let myDay = new Date(volume[0]).getDate().toString();
        if (myDay.length === 1) { myDay = "0" + myDay };
        dataLabels.push(myDay);
        dataPoints.push(volume[1]);
      })
      this.setState({ dataPoints, dataLabels });



      
    } catch(error) {
      console.log("Error in getVolume API!");
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
    console.log(this.state);
    const data = {
      labels: this.state.dataLabels,
      datasets: [
        {
          label: 'Volume',
          data: this.state.dataPoints,
          backgroundColor: 'rgb(33, 114, 229)',
          borderRadius: 4,
          borderWidth: 0,
        },
      ],
    };

  return(
  <>
    <Bar data={data} options={options} />
  </>)};
};

export default BitcoinBarChart;


