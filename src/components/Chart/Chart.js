import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { withTheme } from 'styled-components'

const Chart = (props) => {
  const [gradient, setGradient] = useState('')

  useEffect(() => {
    if (props.type === 'Line') {
      const canvas = document.querySelector('#bitcoin-line-chart')
      var ctx = canvas.getContext('2d')
      var gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, props.theme.lineChartGradientTop)
      gradient.addColorStop(1, props.theme.lineChartGradientBottom)
      setGradient(gradient)
    }
    if (props.type === 'Bar') {
      const canvas = document.querySelector('#bitcoin-bar-chart')
      canvas.height = 134
    }
    // eslint-disable-next-line
  }, [])

  const data = {
    labels: props.dataLabels,
    datasets: [
      {
        label: props.label,
        data: props.dataPoints,
      },
    ],
  }
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
      },
    },
  }

  const dataset = data.datasets[0]

  if (props.type === 'Bar') {
    dataset.barPercentage = 0.93
    dataset.backgroundColor = props.theme.barChart
    dataset.borderRadius = 4
    dataset.borderWidth = 0
    dataset.borderSkipped = false
  }
  if (props.type === 'Line') {
    dataset.fill = true
    dataset.backgroundColor = gradient
    dataset.borderColor = props.theme.lineChart
    options.elements = {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.4,
      },
    }
    options.scales.x.ticks = {
      autoSkip: true,
      maxTicksLimit: 14,
      maxRotation: 0,
      minRotation: 0,
    }
  }

  return (
    <>
      {props.type === 'Line' && (
        <Line data={data} options={options} id="bitcoin-line-chart" />
      )}
      {props.type === 'Bar' && (
        <Bar data={data} options={options} id="bitcoin-bar-chart" />
      )}
    </>
  )
}

export default withTheme(Chart)
