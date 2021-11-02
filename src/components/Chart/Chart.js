import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { withTheme } from 'styled-components'

const Chart = (props) => {
  const data = (canvas) => {
    const ctx = canvas.getContext('2d')
    const data = {
      labels: props.dataLabels,
      datasets: [
        {
          label: props.label,
          data: props.dataPoints,
        },
      ],
    }
    const dataset = data.datasets[0]

    if (props.type === 'Line') {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, props.theme.lineChartGradientTop)
      gradient.addColorStop(1, props.theme.lineChartGradientBottom)
      dataset.fill = true
      dataset.backgroundColor = gradient
      dataset.borderColor = props.theme.lineChart
      dataset.pointBackgroundColor = props.theme.lineChart

      options.elements = {
        point: {
          radius: 1,
          hitRadius: 30,
          hoverRadius: 4,
        },
        line: {
          tension: 0.4,
        },
      }
    }

    if (props.type === 'Bar') {
      dataset.barPercentage = 0.93
      dataset.backgroundColor = props.theme.barChart
      dataset.borderRadius = 4
      dataset.borderWidth = 0
      dataset.borderSkipped = false
    }

    return data
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
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          callback: function (value, index) {
            return props.dataLabels[index].slice(0, 2)
          },
          autoSkip: true,
          maxTicksLimit: 15,
        },
      },
    },
  }

  return (
    <>
      {props.type === 'Line' && <Line data={data} options={options} />}
      {props.type === 'Bar' && <Bar data={data} options={options} />}
    </>
  )
}

export default withTheme(Chart)
