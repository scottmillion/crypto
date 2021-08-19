import axios from 'axios'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
        drawTicks: false,
        borderWidth: 0,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        borderWidth: 0,
      },
      ticks: {},
    },
  },
}

class BitcoinBarChart extends React.Component {
  state = {
    dataPoints: [],
    dataLabels: [],
  }

  getVolumes = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=22&interval=daily`,
      )
      const volumes = data.total_volumes
      const dataPoints = []
      const dataLabels = []
      volumes.forEach((volume) => {
        let myDay = new Date(volume[0]).getDate().toString()
        if (myDay.length === 1) {
          myDay = '0' + myDay
        }
        dataLabels.push(myDay)
        dataPoints.push(volume[1])
      })
      this.setState({ dataPoints, dataLabels })
    } catch (error) {
      console.log('Error in getVolume API!')
      console.log(error)
    }
  }

  componentDidMount() {
    this.getVolumes()
  }

  render() {
    const data = {
      labels: this.state.dataLabels,
      datasets: [
        {
          barPercentage: 0.93,
          label: 'Volume',
          data: this.state.dataPoints,
          backgroundColor: this.props.theme.barChart,
          borderRadius: 4,
          borderWidth: 0,
          borderSkipped: false,
        },
      ],
    }

    return (
      <>
        <Bar data={data} options={options} />
      </>
    )
  }
}

export default BitcoinBarChart
