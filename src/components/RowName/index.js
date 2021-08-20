import styled from 'styled-components'

const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

export const RowName = (props) => (
  <>
    <Img src={props.image} alt={props.name} />
    {props.name} ({props.symbol})
  </>
)
