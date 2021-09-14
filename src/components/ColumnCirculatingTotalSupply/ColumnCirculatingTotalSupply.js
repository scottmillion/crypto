import { formatCurrency } from '@coingecko/cryptoformat'
import { ColumnPercentBar } from 'components'
import { numberShortener } from 'utils'
import { useSelector } from 'react-redux'

const ColumnCirculatingTotalSupply = (props) => {
  const { currency } = useSelector((state) => state.config)
  return (
    <ColumnPercentBar
      color1={props.color1}
      color2={props.color2}
      first={numberShortener(
        formatCurrency(props.circulatingSupply, currency, 'en'),
      ).slice(1)}
      second={
        (props.totalSupply &&
          numberShortener(
            formatCurrency(props.totalSupply, currency, 'en'),
          ).slice(1)) || <span>&#8734;</span>
      }
      percent={
        (100 * props.circulatingSupply) / (props.totalSupply || Infinity)
      }
    />
  )
}

export default ColumnCirculatingTotalSupply
