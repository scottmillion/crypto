import { Cell, Column } from 'components'
import { keyGen } from 'utils'
import styled from 'styled-components'

const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

const ColumnName = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Name
    </Cell>
    {props.columnName.map((obj, index) => {
      return (
        <Cell
          hrWidth={400}
          key={keyGen()}
          turnHrOff={index === props.columnName.length - 1}
        >
          <Img src={obj.image} alt={obj.name} />
          {obj.name} ({obj.symbol.toUpperCase()})
        </Cell>
      )
    })}
  </Column>
)

export default ColumnName
