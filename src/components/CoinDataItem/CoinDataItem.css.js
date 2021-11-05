import styled from 'styled-components'

export const BluePlus = styled.span`
  background: #2172e5;
  height: 18px;
  color: white;
  padding-inline: 5px;
  margin-right: 10px;
  border-radius: 4px;
  &:after {
    content: '+';
  }
`

export const CoinDataLabel = styled.div`
  color: ${(props) => props.color || ''};
  font-weight: 700;
  margin-right: 3px;
`

export const CoinDataItemWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const DivsSameLine = styled.div`
  margin-block: 3px;
  display: flex;
  align-items: center;
`
