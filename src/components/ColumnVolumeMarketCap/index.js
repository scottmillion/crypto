import { coinListPercentDisplayColors as colors } from 'utils/constants'
import { Column } from 'components/Column'
import { Cell } from 'components/Cell'
import { shorterNumber } from 'utils/shorterNumber'
import { formatCurrency } from '@coingecko/cryptoformat'
import { ColumnPercentBar } from 'components/ColumnPercentBar'
import { keyGen } from 'utils/keyGen'

export const ColumnVolumeMarketCap = (props) => (
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
