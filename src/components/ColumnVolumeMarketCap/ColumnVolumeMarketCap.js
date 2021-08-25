import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, ColumnPercentBar } from 'components'
import { numberShortener } from 'utils'

const ColumnVolumeMarketCap = (props) => (
  <Cell width={props.width}>
    <ColumnPercentBar
      color1={props.color1}
      color2={props.color2}
      first={numberShortener(
        formatCurrency(props.totalVolume, props.currency, 'en'),
      )}
      second={numberShortener(
        formatCurrency(props.marketCap, props.currency, 'en'),
      )}
      percent={(100 * props.totalVolume) / props.marketCap}
    />
  </Cell>
)

export default ColumnVolumeMarketCap
