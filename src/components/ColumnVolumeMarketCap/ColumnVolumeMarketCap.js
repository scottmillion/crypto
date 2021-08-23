import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, Column, ColumnPercentBar } from 'components'
import {
  coinListPercentDisplayColors as colors,
  keyGen,
  shorterNumber,
} from 'utils'

const ColumnVolumeMarketCap = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      24h Volume/Market Cap
    </Cell>
    {props.columnVolumeMarketCap.map((obj, index) => {
      return (
        <Cell
          key={keyGen()}
          turnHrOff={index === props.columnVolumeMarketCap.length - 1}
        >
          <ColumnPercentBar
            color1={colors[index][0]}
            color2={colors[index][1]}
            first={shorterNumber(
              formatCurrency(obj.totalVolume, props.currency, 'en'),
            )}
            second={shorterNumber(
              formatCurrency(obj.marketCap, props.currency, 'en'),
            )}
            percent={(100 * obj.totalVolume) / obj.marketCap}
          />
        </Cell>
      )
    })}
  </Column>
)

export default ColumnVolumeMarketCap
