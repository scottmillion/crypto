import { LegendNormal, LegendLarge } from 'components'
import { formatChartNumber, monthNames, today } from 'utils'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ChartLegendWrap = styled.div`
  position: absolute;
  margin-top: 17px;
  width: 95%;
`

const ChartLegend = (props) => {
  const { currencySymbol } = useSelector((state) => state.config)
  return (
    <ChartLegendWrap>
      <LegendNormal>{props.legendTitle}</LegendNormal>
      <LegendLarge>
        {currencySymbol}
        {formatChartNumber(+props.legendDisplayNumber)}
      </LegendLarge>
      <LegendNormal>
        {monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}
      </LegendNormal>
    </ChartLegendWrap>
  )
}

export default ChartLegend
