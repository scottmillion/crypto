import axios from 'axios'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { withTheme } from 'styled-components'

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
      const dataPoints = volumes.map((volume) => volume[1])
      const dataLabels = volumes.map((volume) =>
        new Date(volume[0]).getDate().toString(),
      )
      this.setState({
        dataLabels,
        dataPoints,
      })
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

export default withTheme(BitcoinBarChart)
