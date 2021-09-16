import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ColumnCurrentPrice,
  ColumnTwentyFourHourChange,
  LoadingBox,
} from 'components'
import { keyGen, getFormattedDate } from 'utils'
import {
  getCoinsData,
  setValue,
  toggleShowPopUp,
} from 'store/portfolio/actions.js'
import {
  ButtonContainer,
  ButtonMain,
  ColorGreen,
  CoinDataRow,
  Container,
  Content,
  ContentContainer,
  H1,
  Img,
  ImgWrap,
  Row,
  CoinInfo,
  CoinInfoWrap,
  CoinData,
  Label,
  Item,
  ItemLabel,
  ItemRow,
  PercentDisplay,
  Circle,
  PopUp,
  PopUpWrap,
} from './Portfolio.css'
import styled from 'styled-components'

const Input = styled.input`
  display: block;
`

const Portfolio = () => {
  const { currency } = useSelector((state) => state.config)
  const { data, isLoading, showPopUp, value } = useSelector(
    (state) => state.portfolio,
  )
  const dispatch = useDispatch()

  const [coinName, setCoinName] = useState('')
  const [coinValue, setCoinValue] = useState('')
  const [coinPurchaseDate, setCoinPurchaseDate] = useState(getFormattedDate())

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(coinName)
    console.log(coinValue)
    console.log(coinPurchaseDate)
  }

  useEffect(() => {
    dispatch(getCoinsData())
    // eslint-disable-next-line
  }, [currency])

  return (
    <Container>
      {showPopUp && (
        <PopUpWrap>
          <PopUp>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={coinName}
                placeholder="Bitcoin"
                onChange={(e) => setCoinName(e.target.value)}
              />
              <Input
                type="text"
                onChange={(e) => setCoinValue(e.target.value)}
                placeholder="13.029381"
                value={coinValue}
              />
              <Input
                type="date"
                onChange={(e) => setCoinPurchaseDate(e.target.value)}
                value={coinPurchaseDate}
              />
              <button>Add Coin</button>
            </form>
          </PopUp>
        </PopUpWrap>
      )}
      <ContentContainer>
        <ButtonContainer>
          <ButtonMain onClick={() => dispatch(toggleShowPopUp())}>
            Add Asset
          </ButtonMain>
        </ButtonContainer>
        <H1>Your statistics</H1>
        {(data.length > 0 && !isLoading && (
          <Content>
            {data.map((coin) => {
              const {
                circulating_supply,
                current_price,
                id,
                image,
                market_cap,
                name,
                symbol,
                total_supply,
                total_volume,
                price_change_percentage_24h_in_currency: twentyFourHourChange,
              } = coin
              const totalSupply = total_supply || Infinity
              const marketCapTotalVolumePercent = Math.round(
                (100 * total_volume) / market_cap,
              )
              const circulatingTotalSupplyPercent = Math.round(
                (100 * circulating_supply) / totalSupply,
              )

              return (
                <Row key={keyGen()}>
                  <CoinInfoWrap>
                    <CoinInfo>
                      <ImgWrap>
                        <Img src={image} alt={id} />
                      </ImgWrap>
                      {name} ({symbol.toUpperCase()})
                    </CoinInfo>
                  </CoinInfoWrap>
                  <CoinData>
                    <CoinDataRow>
                      <ItemLabel>
                        <Label>Market Price:</Label>
                      </ItemLabel>
                      <ItemRow>
                        <Item>
                          <Label>Price now:</Label>{' '}
                          <ColumnCurrentPrice price={current_price} />
                        </Item>
                        <Item>
                          <Label>Price 24h chg:</Label>
                          <ColumnTwentyFourHourChange
                            symbol={symbol}
                            twentyFourHourChange={twentyFourHourChange}
                          />
                        </Item>
                        <Item>
                          <Label>Vol / Mrkt Cap:</Label>
                          <ColorGreen>
                            {marketCapTotalVolumePercent}%
                          </ColorGreen>
                          <PercentDisplay percent={marketCapTotalVolumePercent}>
                            <Circle percent={marketCapTotalVolumePercent} />
                          </PercentDisplay>
                        </Item>
                        <Item>
                          <Label>Circ / Total Sup:</Label>
                          <ColorGreen>
                            {circulatingTotalSupplyPercent}%
                          </ColorGreen>
                          <PercentDisplay
                            percent={circulatingTotalSupplyPercent}
                          >
                            <Circle percent={circulatingTotalSupplyPercent} />
                          </PercentDisplay>
                        </Item>
                      </ItemRow>
                    </CoinDataRow>
                    <CoinDataRow>
                      <ItemLabel>
                        <Label>Your Coin:</Label>
                      </ItemLabel>
                      <ItemRow>
                        <Item>
                          <Label>Amt:</Label> 1.6
                        </Item>
                        <Item>
                          <Label>Value:</Label> 1.6 * Price
                        </Item>
                        <Item>
                          <Label>Price change since purchase</Label>% change
                          today vs purchase date
                        </Item>
                        <Item>
                          <Label>Purchase date</Label> 03.23.2021
                        </Item>
                      </ItemRow>
                    </CoinDataRow>
                  </CoinData>
                </Row>
              )
            })}
          </Content>
        )) || <LoadingBox height={300} />}
      </ContentContainer>
    </Container>
  )
}

export default Portfolio
