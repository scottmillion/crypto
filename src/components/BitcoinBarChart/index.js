import axios from 'axios';
import React from 'react';
import {Chart} from "chart.js";



export default class BitcoinBarChart extends React.Component {
  state = {
    dataPoints: [],
    dataLabels: [],
    gradient: ""
  }

  getVolumes = async () => {
    try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=22&interval=daily`);
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
    this.getVolumes().then(() => {
      const myChartRef = this.chartRef.current.getContext("2d");

      new Chart(myChartRef, {
          type: "bar",
          data: {
              labels: this.state.dataLabels,
              datasets: [
                {
                  
                  barPercentage: .93,
                  label: 'Volume',
                  data: this.state.dataPoints,
                  backgroundColor: 'rgb(33, 114, 229)',                  
                  borderRadius: 4,
                  borderWidth: 0,
                  borderSkipped: false
                  

                },
              ],
          },
          options : {
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
          }   
      })     
    });
  }

  chartRef = React.createRef();



  render(){
    return (
          <canvas ref={this.chartRef} height="130px"/>
  )
};
};


