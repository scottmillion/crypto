import { Chart, ChartLegend, LoadingBox } from 'components'
import { ChartContainer, ChartContent, ChartWrap } from './ChartDisplay.css'
import React from 'react'

const displayChart = (props, type) =>
  type &&
  props.data.length > 0 &&
  props.dataLabels.length > 0 &&
  props.dataPoints.length > 0 &&
  !props.isLoading

const ChartDisplay = React.memo((props) => {
  let type
  if (props.label === 'Price') {
    type = 'current_price'
  }
  if (props.label === 'Volume') {
    type = 'total_volume'
  }

  return (
    <ChartContainer width={props.width}>
      <ChartContent>
        {!displayChart(props, type) && <LoadingBox />}
        {displayChart(props, type) && (
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
        )}
      </ChartContent>
    </ChartContainer>
  )
})

export default ChartDisplay
