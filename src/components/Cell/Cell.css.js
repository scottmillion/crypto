import styled from 'styled-components'

export const CellContent = styled.div`
  color: ${(props) =>
    !isNaN(props.number) ? (props.number < 0 ? '#FE1040' : '#00FC2A') : ''};
  display: flex;
  align-items: center;
`
