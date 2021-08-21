import { Cell } from 'components/Cell'
import { Column } from 'components/Column'
import { convertLargeNumber } from 'utils/convertLargeNumber'
import { formatCurrency } from '@coingecko/cryptoformat'
import { keyGen } from 'utils/keyGen'

export const ColumnCurrentPrice = (props) => (
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
