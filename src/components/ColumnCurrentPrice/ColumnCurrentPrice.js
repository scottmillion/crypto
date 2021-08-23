import { formatCurrency } from '@coingecko/cryptoformat'
import { Cell, Column } from 'components'
import { convertLargeNumber, keyGen } from 'utils'

const ColumnCurrentPrice = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Price
    </Cell>
    {props.columnCurrentPrice.map((price, index) => {
      return (
        <Cell
          key={keyGen()}
          turnHrOff={index === props.columnCurrentPrice.length - 1}
        >
          {convertLargeNumber(formatCurrency(price, props.currency, 'en'))}
        </Cell>
      )
    })}
  </Column>
)

export default ColumnCurrentPrice
