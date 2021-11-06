import styled from 'styled-components'

export const ChartsContainer = styled.div`
  /* outline: 1px solid blue; */
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CoinContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding-block: 15px;
  padding-inline: 6px;
  margin-top: 25px;
  margin-bottom: 59px;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 90%;
`

export const DataSelectContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding-block: 10px;
  padding-inline: 6px;
  margin-top: 25px;
  margin-inline: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    width: 500px;
    padding-block: 15px;
  }
`

export const DataSelectItem = styled.div`
  padding-inline: 14px;
  padding-block: 4px;
  font-size: 14px;
  border-radius: 14px;
  background: ${(props) =>
    props.highlight ? props.theme.barChart : props.theme.primary};

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: 400px) {
    font-size: 10px;
    padding-inline: 8px;
  }
`

export const H1 = styled.h1`
  margin-left: 3px;
  font-size: 1.4rem;
  font-weight: 500;
`
