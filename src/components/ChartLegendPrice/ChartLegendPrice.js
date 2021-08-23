import { LegendNormal, LegendLarge } from 'components'
import { formatChartNumber, monthNames, today } from 'utils'
import styled from 'styled-components'

const ChartLegendPriceWrap = styled.div`
  position: absolute;
  margin-top: 17px;
  margin-left: 21px;
`

const ChartLegendPrice = (props) => {
  return (
    <ChartLegendPriceWrap>
      <LegendNormal>BTC</LegendNormal>
      <LegendLarge>
        {props.currencySymbol}
        {formatChartNumber(
          props.data.filter((item) => item.id === 'bitcoin')[0].current_price,
        )}
      </LegendLarge>
      <LegendNormal>
        {monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}
      </LegendNormal>
    </ChartLegendPriceWrap>
  )
}

export default ChartLegendPrice
