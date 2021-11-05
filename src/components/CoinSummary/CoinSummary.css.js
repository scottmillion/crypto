import styled from 'styled-components'
import { Stack } from '@styled-icons/bootstrap/Stack'

export const CoinInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
`

export const CoinInfoWrap = styled.div`
  flex: 1 1 auto;
  margin: 5px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px;
`

export const CoinPrices = styled.div`
  /* outline: 1px solid yellow; */
  flex: 1 1 auto;
  margin: 5px;
  background: ${(props) => props.theme.secondary};
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px;
  text-align: center;
`

export const CoinSummaryWrap = styled.div`
  /* outline: 1px solid red; */
  margin-block: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ColumnTwentyFourHourChangeWrap = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
`

export const CurrentPriceWrap = styled.div`
  font-size: 24px;
  font-weight: 600;
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

export const StackSmall = styled(Stack)`
  margin-top: 10px;
  width: 30px;
`
