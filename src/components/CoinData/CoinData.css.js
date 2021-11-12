import styled from 'styled-components'

export const Br = styled.div`
  height: 18px;

  @media (max-width: 400px) {
    height: 14px;
  }
`

export const CoinDataWrap = styled.div`
  margin: 5px;
  flex: 1 1 auto;
  background: ${(props) => props.theme.secondary};
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const CoinDataItemWrap = styled.div`
  width: fit-content;
`

export const MarginLeft = styled.div`
  margin-left: 5px;
`
