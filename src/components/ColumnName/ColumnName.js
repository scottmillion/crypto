import styled from 'styled-components'
import { Cell } from 'components'

const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

const ColumnName = (props) => (
  <Cell>
    <Img src={props.image} alt={props.name} />
    {props.name} ({props.symbol.toUpperCase()})
  </Cell>
)

export default ColumnName
