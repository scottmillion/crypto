import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, ColumnPercentBar } from 'components'
import { numberShortener } from 'utils'

const ColumnCirculatingTotalSupply = (props) => (
  <Cell width={props.width}>
    <ColumnPercentBar
      color1={props.color1}
      color2={props.color2}
      first={numberShortener(
        formatCurrency(props.circulatingSupply, props.currency, 'en'),
      ).slice(1)}
      second={
        (props.totalSupply &&
          numberShortener(
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
