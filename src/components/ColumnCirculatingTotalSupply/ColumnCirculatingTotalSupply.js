import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, ColumnPercentBar } from 'components'
import { shorterNumber } from 'utils'

const ColumnCirculatingTotalSupply = (props) => (
  <Cell width={props.width}>
    <ColumnPercentBar
      color1={props.color1}
      color2={props.color2}
      first={shorterNumber(
        formatCurrency(props.circulatingSupply, props.currency, 'en'),
      ).slice(1)}
      second={
        (props.totalSupply &&
          shorterNumber(
            formatCurrency(props.totalSupply, props.currency, 'en'),
          ).slice(1)) || <span>&#8734;</span>
      }
      percent={
        (100 * props.circulatingSupply) / (props.totalSupply || Infinity)
      }
    />
  </Cell>
)

export default ColumnCirculatingTotalSupply
