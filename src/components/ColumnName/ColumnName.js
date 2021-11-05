import styled from 'styled-components'
import { Cell } from 'components'
import { Link } from 'react-router-dom'

const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const ColumnName = (props) => (
  <Cell>
    <Img src={props.image} alt={props.name} />
    <StyledLink to={`/coin/${props.id}`}>
      {props.name} ({props.symbol.toUpperCase()}
    </StyledLink>
    )
  </Cell>
)

export default ColumnName
