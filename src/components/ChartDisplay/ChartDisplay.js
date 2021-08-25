import { Chart, ChartLegend } from 'components'
import { ChartContainer, ChartWrap } from './ChartDisplay.css'

const ChartDisplay = (props) => (
  <ChartContainer>
    <ChartLegend
      currencySymbol={props.currencySymbol}
      legendDisplayNumber={props.legendDisplayNumber}
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
  </ChartContainer>
)

export default ChartDisplay
