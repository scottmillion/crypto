import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell } from 'components'
import { convertLargeNumber } from 'utils'
import { useSelector } from 'react-redux'

const ColumnCurrentPrice = (props) => {
  const { currency } = useSelector((state) => state.config)
  return (
    <Cell width={props.width}>
      {convertLargeNumber(formatCurrency(props.price, currency, 'en'))}
    </Cell>
  )
}

export default ColumnCurrentPrice
