import styled from 'styled-components'

export const BluePlus = styled.span`
  background: #2172e5;
  color: white;
  padding-inline: 5px;
  margin-right: 10px;
  border-radius: 4px;
  &:after {
    content: '+';
  }
`

export const CoinDataLabel = styled.span`
  color: ${(props) => props.color || ''};
  font-weight: 700;
  margin-right: 3px;
`

export const CoinDataItemWrap = styled.div`
  margin-bottom: 5px;
`

export const DivsSameLine = styled.div`
  display: flex;
`
