import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, ColumnPercentBar } from 'components'
import { shorterNumber } from 'utils'

const ColumnVolumeMarketCap = (props) => (
  <Cell width={props.width}>
    <ColumnPercentBar
      color1={props.color1}
      color2={props.color2}
      first={shorterNumber(
        formatCurrency(props.totalVolume, props.currency, 'en'),
      )}
      second={shorterNumber(
        formatCurrency(props.marketCap, props.currency, 'en'),
      )}
      percent={(100 * props.totalVolume) / props.marketCap}
    />
  </Cell>
)

export default ColumnVolumeMarketCap
