import styled from 'styled-components'

export const CellContent = styled.div`
  width: ${(props) => props.width}px;
  height: 60px;
  padding: ${(props) => (props.isLabel ? '0px' : '18px')} 0px;
  color: ${(props) =>
    !isNaN(props.number) ? (props.number < 0 ? '#FE1040' : '#00FC2A') : ''};
  font-size: ${(props) => props.size || '18'}px;
  font-weight: ${(props) => props.weight || 400};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Hr = styled.div`
  display: ${(props) => (props.isLabel || props.turnHrOff) && 'none'};
  width: ${(props) => props.hrWidth || 300}px;
  position: absolute;
  border-top: 1px solid ${(props) => props.theme.hrLineTop};
  border-bottom: 1px solid ${(props) => props.theme.hrLineBottom};
`
