import { LegendNormal, LegendLarge } from 'components'
import { formatChartNumber, monthNames, today } from 'utils'
import styled from 'styled-components'

const ChartLegendVolumeWrap = styled.div`
  position: absolute;
  margin-top: 17px;
  width: 95%;
`

const ChartLegendVolume = (props) => {
  return (
    <ChartLegendVolumeWrap>
      <LegendNormal>Volume 24h</LegendNormal>
      <LegendLarge>
        {props.currencySymbol}
        {formatChartNumber(
          props.data.find((item) => item.id === 'bitcoin').total_volume,
        )}
      </LegendLarge>
      <LegendNormal>
        {monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}
      </LegendNormal>
    </ChartLegendVolumeWrap>
  )
}

export default ChartLegendVolume
