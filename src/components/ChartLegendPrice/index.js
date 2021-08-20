import { monthNames, today } from 'utils/constants'
import { formatChartNumber } from 'utils/formatChartNumber'
import { LegendNormal } from 'components/LegendNormal'
import { LegendLarge } from 'components/LegendLarge'
import styled from 'styled-components'

const ChartLegendPriceWrap = styled.div`
  position: absolute;
  margin-top: 17px;
  margin-left: 21px;
`

export const ChartLegendPrice = (props) => {
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
