import { Cell } from 'components'

import styled from 'styled-components'

const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

const ColumnName = (props) => (
  <Cell width={props.width}>
    <Img src={props.image} alt={props.name} />
    {props.name} ({props.symbol.toUpperCase()})
  </Cell>
)

export default ColumnName
