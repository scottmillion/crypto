import React from 'react'
import { useSelector } from 'react-redux'
import { Chart, ChartLegend, LoadingBox } from 'components'
import { ChartContainer, ChartContent, ChartWrap } from './ChartDisplay.css'

const displayChart = (props, type, legendDisplayNumber) =>
  type &&
  props.data.length > 0 &&
  props.dataLabels.length > 0 &&
  props.dataPoints.length > 0 &&
  !props.isLoading &&
  legendDisplayNumber

const ChartDisplay = React.memo((props) => {
  const { latestPrice, latestVolume } = useSelector((state) => state.allCoins)
  let legendDisplayNumber
  let type
  if (props.label === 'Price') {
    type = 'current_price'
    legendDisplayNumber = latestPrice
  }
  if (props.label === 'Volume') {
    type = 'total_volume'
    legendDisplayNumber = latestVolume
  }

  return (
    <ChartContainer width={props.width}>
      <ChartContent>
        {!displayChart(props, type, legendDisplayNumber) && <LoadingBox />}
        {displayChart(props, type, legendDisplayNumber) && (
          <>
            <ChartLegend
              legendDisplayNumber={legendDisplayNumber.toFixed()}
              legendTitle={props.legendTitle}
            />

            <ChartWrap>
              <Chart
                dataLabels={props.dataLabels}
                dataPoints={props.dataPoints}
                label={props.label}
                type={props.type}
                displayXAxis={window.innerWidth > 400}
              />
            </ChartWrap>
          </>
        )}
      </ChartContent>
    </ChartContainer>
  )
})

export default ChartDisplay
