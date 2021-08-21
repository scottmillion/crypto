import styled from 'styled-components'
import { Cell } from 'components/Cell'
import { Column } from 'components/Column'

const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

export const ColumnName = (props) => (
  <Column>
    <Cell isLabel={true} weight={700} size={16}>
      Name
    </Cell>
    {props.columnName.map((obj, index) => {
      return (
        <Cell hrWidth={400} turnHrOff={index === props.columnName.length - 1}>
          <Img src={obj.image} alt={obj.name} />
          {obj.name} ({obj.symbol.toUpperCase()})
        </Cell>
      )
    })}
  </Column>
)
