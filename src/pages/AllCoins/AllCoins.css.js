import styled from 'styled-components'

export const ChartPrice = styled.div`
  width: 80%;
  margin-top: 7%;
  margin-bottom: 4%;
  margin-left: 9%;
`

export const ChartVolume = styled.div`
  width: 82%;
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const ChartContainerPrice = styled.div`
  position: relative;
  width: 48.5%;
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
`

export const ChartContainerVolume = styled.div`
  position: relative;
  width: 48.5%;
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
`

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
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 25px;
  margin-bottom: 59px;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 100%;
  margin-left: 104px;
  margin-right: 104px;
`

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
`
