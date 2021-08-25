import styled from 'styled-components'

export const CellContent = styled.div`
  width: ${(props) => props.width}px;
  height: 60px;
  color: ${(props) =>
    !isNaN(props.number) ? (props.number < 0 ? '#FE1040' : '#00FC2A') : ''};
  font-size: ${(props) => props.size || '18'}px;
  font-weight: ${(props) => props.weight || 400};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
