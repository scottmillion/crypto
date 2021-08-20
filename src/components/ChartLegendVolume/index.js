import { monthNames, today } from 'utils/constants'
import { formatChartNumber } from 'utils/formatChartNumber'
import { LegendNormal } from 'components/LegendNormal'
import { LegendLarge } from 'components/LegendLarge'
import styled from 'styled-components'

const ChartLegendVolumeWrap = styled.div`
  position: absolute;
  margin-top: 17px;
  width: 95%;
`

export const ChartLegendVolume = (props) => {
  return (
    <ChartLegendVolumeWrap>
      <LegendNormal>Volume 24h</LegendNormal>
      <LegendLarge>
        {props.currencySymbol}
        {formatChartNumber(
          props.data.filter((item) => item.id === 'bitcoin')[0].total_volume,
        )}
      </LegendLarge>
      <LegendNormal>
        {monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}
      </LegendNormal>
    </ChartLegendVolumeWrap>
  )
}
