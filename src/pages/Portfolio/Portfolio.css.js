import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
`
export const ButtonMain = styled.button`
  background: rgb(6, 213, 84);
  border: 1px solid rgb(6, 213, 84);
  color: ${(props) => props.theme.mainFont};
  font-size: 1.4rem;
  font-weight: 700;
  padding: 34px 250px;
  border-radius: 20px;
  &:hover {
    background: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondaryInverted};
  }
`

export const Circle = styled.div`
  height: 14px;

  width: 14px;
  background: ${(props) => props.theme.secondaryInverted};
  border-radius: 7px;
  margin-left: calc(${(props) => props.percent}% - 14px);
`

export const CoinData = styled.div`
  margin-left: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`

export const CoinDataRow = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-wrap: wrap;
`

export const CoinInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
`

export const CoinInfoWrap = styled.div`
  flex-basis: 150px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 25px;
`

export const ColorGreen = styled.span`
  color: #00fc2a;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;
`

export const ContentContainer = styled.div`
  width: 90%;
`

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 40px;
`
export const Img = styled.img`
  width: 60px;
  padding: 24px;
  background: ${(props) => props.theme.primary};
`

export const ImgWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`

export const Item = styled.span`
  margin-right: 28px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`

export const ItemLabel = styled.div`
  flex-basis: 100%;
  display: flex;
`

export const ItemRow = styled.div`
  flex-basis: 100%;
  padding: 24px 0px 24px 34px;
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  display: flex;
  align-items: center;
`

export const Label = styled.span`
  font-weight: 700;
  margin-right: 16px;
`

export const PercentDisplay = styled.div`
  position: relative;
  overflow: hidden;
  width: 65px;
  height: 14px;
  border-radius: 7px;
  margin-left: 10px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.secondaryInverted} 0%,
    ${(props) => props.theme.secondaryInverted}
      ${(props) => props.percent - 15 + '%'},
    rgb(6, 213, 84) ${(props) => props.percent - 15 + '%'},
    rgb(6, 213, 84) 100%
  );
`

export const Row = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 40px;
`
