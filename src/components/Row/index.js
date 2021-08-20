import styled from 'styled-components'

const RowWrap = styled.div`
  padding: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Row = (props) => <RowWrap>{props.children}</RowWrap>
