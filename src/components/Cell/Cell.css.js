import styled from 'styled-components'

export const CellContent = styled.div`
  /* outline: 1px solid green; */
  position: relative;
  color: ${(props) =>
    !isNaN(props.number) ? (props.number < 0 ? '#FE1040' : '#00FC2A') : ''};
  font-size: ${(props) => props.size || '18'}px;
  font-weight: ${(props) => props.weight || 400};
  height: 60px;
  width: ${(props) => props.width}px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
