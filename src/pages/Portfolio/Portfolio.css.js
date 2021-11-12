import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 28px;
  display: flex;
  justify-content: center;
`
export const ButtonMain = styled.button`
  background: rgb(6, 213, 84);
  border: 1px solid rgb(6, 213, 84);
  color: ${(props) => props.theme.mainFont};
  font-size: 1.4rem;
  font-weight: 700;
  padding: 14px 60px;
  margin-bottom: 24px;
  border-radius: 20px;
  &:hover {
    background: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondaryInverted};
  }
  @media (min-width: 768px) {
    padding: 24px 150px;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  @media (min-width: 768px) {
    margin-left: 30px;
  }
`

export const CoinDataRow = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    margin-top: 12px;
    margin-bottom: 10px;
  }
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

export const DeleteCoin = styled.div`
  color: red;
  line-height: 28px;
  font-size: 30px;
  font-weight: 600;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

export const H1 = styled.h1`
  margin-left: 3px;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 20px;
`
export const Img = styled.img`
  width: 100px;
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
  display: flex;
  align-items: center;
  margin: 5px 0px 5px 20px;
  padding-block: 3px;
  @media (min-width: 768px) {
    margin: 0px 10px 0px 22px;
    padding-block: 10px;
    flex-wrap: nowrap;
  }
`

export const ItemLabel = styled.div`
  flex-basis: 100%;
  display: flex;
  margin-left: 3px;
`

export const ItemRow = styled.div`
  padding-block: 5px;
  width: 100%;
  border-radius: 20px;
  background: ${(props) => props.theme.secondary};
  margin-top: 5px;
  @media (min-width: 768px) {
    padding: 0px;
    flex-wrap: wrap;
    height: 108px;
    display: flex;
    align-content: center;
  }
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
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 280px;
  }
`
