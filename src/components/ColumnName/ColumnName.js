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

const ColumnName = (props) => {
  const name =
    props.name.length < 11 ? props.name : props.name.slice(0, 8) + '...'
  let symbol = props.symbol.toUpperCase()
  if (symbol.length > 9) {
    symbol = symbol.slice(0, 8) + '...'
  }

  return (
    <Cell>
      <Img src={props.image} alt={props.name} />
      <StyledLink to={`/coin/${props.id}`}>
        {name} ({symbol})
      </StyledLink>
    </Cell>
  )
}

export default ColumnName
