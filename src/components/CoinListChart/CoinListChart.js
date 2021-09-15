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
      tension: 0.5,
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
        drawTicks: false,
        borderWidth: 0,
      },
      ticks: {
        display: false,
      },
    },
  },
}

const CoinListChart = (props) => {
  const data = (canvas) => {
    const data = {
      labels: new Array(props.prices.length).fill(''),
      datasets: [
        {
          fill: false,
          data: props.prices,
          borderColor: `${props.sevenDayChange < 0 ? '#FE1040' : '#00FC2A'}`,
        },
      ],
    }
    return data
  }

  return (
    <Line
      data={data}
      options={options}
      style={{ backgroundColor: props.theme.secondary }}
    />
  )
}

export default withTheme(CoinListChart)
