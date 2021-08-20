import styled from 'styled-components'

const RowWrap = styled.div`
  padding: ${(props) => (props.isLabel ? '0px' : '8px')} 4px;
  margin: ${(props) => (props.isLabel ? '0px' : '8px')} 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Row = (props) => (
  <RowWrap isLabel={props.isLabel}>{props.children}</RowWrap>
)
