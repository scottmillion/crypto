import { Chart, ChartLegend, LoadingBox } from 'components'
import { ChartContainer, ChartWrap } from './ChartDisplay.css'

const ChartDisplay = (props) => {
  let type
  if (props.label === 'Price') {
    type = 'current_price'
  }
  if (props.label === 'Volume') {
    type = 'total_volume'
  }
  const displayChart =
    type &&
    props.data.length > 0 &&
    props.dataLabels.length > 0 &&
    props.dataPoints.length > 0 &&
    !props.isLoading

  return (
    <ChartContainer width={props.width}>
      {(displayChart && (
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
      )) || <LoadingBox height={200} />}
    </ChartContainer>
  )
}

export default ChartDisplay
