import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, ColumnPercentBar } from 'components'
import { numberShortener } from 'utils'
import { useSelector } from 'react-redux'

const ColumnVolumeMarketCap = (props) => {
  const { currency } = useSelector((state) => state.config)
  return (
    <Cell width={props.width}>
      <ColumnPercentBar
        color1={props.color1}
        color2={props.color2}
        first={numberShortener(
          formatCurrency(props.totalVolume, currency, 'en'),
        )}
        second={numberShortener(
          formatCurrency(props.marketCap, currency, 'en'),
        )}
        percent={(100 * props.totalVolume) / props.marketCap}
      />
    </Cell>
  )
}

export default ColumnVolumeMarketCap
