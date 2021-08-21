import { Cell } from 'components/Cell'
import { Column } from 'components/Column'

export const ColumnNumber = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      #
    </Cell>
    {props.columnNumber.map((number, index) => {
      return (
        <Cell turnHrOff={index === props.columnNumber.length - 1}>
          {number}
        </Cell>
      )
    })}
  </Column>
)
