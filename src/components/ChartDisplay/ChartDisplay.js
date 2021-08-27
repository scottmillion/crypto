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

  return (
    <ChartContainer>
      {(type &&
        props.data &&
        props.dataLabels &&
        props.dataPoints &&
        !props.isLoading && (
          <>
            <ChartLegend
              currencySymbol={props.currencySymbol}
              legendDisplayNumber={
                props.data.find((item) => item.id === 'bitcoin')[type]
              }
              legendTitle={props.legendTitle}
            />
            <ChartWrap>
              <Chart
                dataLabels={props.dataLabels}
                dataPoints={props.dataPoints}
                currency={props.currency}
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
