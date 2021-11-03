import { Chart, ChartLegend, LoadingBox } from 'components'
import { ChartContainer, ChartWrap } from './ChartDisplay.css'
import React from 'react'

const ChartDisplay = React.memo((props) => {
  const getLoadingBoxHeight = (width) => {
    if (width > 1217) {
      return 263
    }
    if (width > 899) {
      return width / 4.55
    }
    return width / 2.22
  }

  let type
  if (props.label === 'Price') {
    type = 'current_price'
  }
  if (props.label === 'Volume') {
    type = 'total_volume'
  }
  const displayChart = (props) =>
    type &&
    props.data.length > 0 &&
    props.dataLabels.length > 0 &&
    props.dataPoints.length > 0 &&
    !props.isLoading
  return (
    <>
      {console.log(window.innerWidth)}
      <ChartContainer width={props.width}>
        {(displayChart(props) && (
          <>
            <ChartLegend
              legendDisplayNumber={
                props.data.find((item) => item.id === 'bitcoin')[type]
              }
              legendTitle={props.legendTitle}
            />
            <ChartWrap>
              <Chart
                dataLabels={props.dataLabels}
                dataPoints={props.dataPoints}
                label={props.label}
                type={props.type}
              />
            </ChartWrap>
          </>
        )) || <LoadingBox height={getLoadingBoxHeight(window.innerWidth)} />}
      </ChartContainer>
    </>
  )
})

export default ChartDisplay
