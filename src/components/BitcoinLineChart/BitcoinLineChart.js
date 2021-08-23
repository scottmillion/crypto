import axios from 'axios'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { withTheme } from 'styled-components'

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 0.4,
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
      ticks: {
        autoSkip: true,
        maxTicksLimit: 14,
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
}

class BitcoinLineChart extends React.Component {
  state = {
    dataPoints: [],
    dataLabels: [],
    gradient: '',
  }

  getPrices = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=39&interval=daily`,
      )

      const prices = data.prices
      const dataPoints = []
      const dataLabels = []
      prices.forEach((price) => {
        let myDay = new Date(price[0]).getDate().toString()
        if (myDay.length === 1) {
          myDay = '0' + myDay
        }
        dataLabels.push(myDay)
        dataPoints.push(price[1])
      })
      this.setState({ dataPoints, dataLabels })
    } catch (error) {
      console.log('Error in getPrices API!')
      console.log(error)
    }
  }

  componentDidMount() {
    this.getPrices()

    const canvas = document.querySelector('canvas')
    var ctx = canvas.getContext('2d')
    var gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, this.props.theme.lineChartGradientTop)
    gradient.addColorStop(1, this.props.theme.lineChartGradientBottom)
    this.setState({ gradient })
  }
  render() {
    const data = {
      labels: this.state.dataLabels,
      datasets: [
        {
          label: 'Price',
          data: this.state.dataPoints,
          fill: true,
          backgroundColor: this.state.gradient,
          borderColor: this.props.theme.lineChart,
        },
      ],
    }

    return (
      <>
        <Line data={data} options={options} />
      </>
    )
  }
}

export default withTheme(BitcoinLineChart)
