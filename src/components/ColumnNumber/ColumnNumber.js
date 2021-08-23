import { Cell, Column } from 'components'
import { keyGen } from 'utils'

const ColumnNumber = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      #
    </Cell>
    {props.columnNumber.map((number, index) => {
      return (
        <Cell
          key={keyGen()}
          turnHrOff={index === props.columnNumber.length - 1}
        >
          {number}
        </Cell>
      )
    })}
  </Column>
)

export default ColumnNumber
