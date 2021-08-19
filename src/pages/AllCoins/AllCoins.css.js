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

export const ChartLegendPrice = styled.div`
  position: absolute;
  margin-top: 17px;
  margin-left: 21px;
`

export const ChartLegendVolume = styled.div`
  position: absolute;
  margin-top: 17px;
  width: 95%;
`

export const CoinContainer = styled.div`
  /* outline: 1px solid blue; */
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 35px;
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

export const LegendNormal = styled.div`
  font-size: 1.2rem;
`

export const LegendLarge = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 2.9rem;
`
