import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { withTheme } from 'styled-components'

class Chart extends React.Component {
  state = {
    gradient: '',
  }

  componentDidMount() {
    console.log(this.ref)
    // if (this.chartReference) {
    //   console.log("'''''''''''''''")
    //   console.log(this.chartReference)
    //   console.log("'''''''''''''''")
    // } else {
    //   console.log('---------------')
    //   console.log(this.chartReference)
    //   console.log('---------------')
    // }

    // if (this.props.type === 'Line') {
    //   const canvas = document.querySelector('#bitcoin-line-chart')
    //   var ctx = canvas.getContext('2d')
    //   var gradient = ctx.createLinearGradient(0, 0, 0, 400)
    //   gradient.addColorStop(0, this.props.theme.lineChartGradientTop)
    //   gradient.addColorStop(1, this.props.theme.lineChartGradientBottom)
    //   this.setState({ gradient })
    // }
    // if (this.props.type === 'Bar') {
    //   const canvas = document.querySelector('#bitcoin-bar-chart')
    //   canvas.height = 134
    // }
  }

  data = {
    labels: this.props.dataLabels,
    datasets: [
      {
        label: this.props.label,
        data: this.props.dataPoints,
      },
    ],
  }

  options = {
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

  ref = React.createRef()

  render() {
    const { data, options, ref } = this
    const dataset = data.datasets[0]

    if (this.props.type === 'Bar') {
      dataset.barPercentage = 0.93
      dataset.backgroundColor = this.props.theme.barChart
      dataset.borderRadius = 4
      dataset.borderWidth = 0
      dataset.borderSkipped = false
    }

    if (this.props.type === 'Line') {
      dataset.fill = true
      dataset.backgroundColor = this.state.gradient
      dataset.borderColor = this.props.theme.lineChart
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
        {this.props.type === 'Line' && (
          <Line data={data} options={options} ref={ref} />
        )}
        {this.props.type === 'Bar' && (
          <Bar data={data} options={options} ref={ref} />
        )}
      </>
    )
  }
}

export default withTheme(Chart)
