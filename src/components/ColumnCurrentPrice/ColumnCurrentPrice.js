import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell } from 'components'
import { convertLargeNumber } from 'utils'

const ColumnCurrentPrice = (props) => (
  <Cell width={props.width}>
    {convertLargeNumber(formatCurrency(props.price, props.currency, 'en'))}
  </Cell>
)

export default ColumnCurrentPrice
