import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import {
  ColumnCurrentPrice,
  ColumnTwentyFourHourChange,
  LoadingBox,
} from 'components'
import { keyGen } from 'utils'
import styled from 'styled-components'

const Input = styled.input``

const Portfolio = (props) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const [value, setValue] = useState('')

  const getData = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20dogecoin%2C%20binancecoin%2C%20cardano%2C%20usd-coin%2C%20wrapped-bitcoin%2C%20litecoin&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
      )
      setIsLoading(false)
      setData(data)
    } catch (error) {
      console.log('Error in getData API!')
      console.log(error)
    }
  }

  const handleClick = () => {
    setShowPopUp(!showPopUp)
  }

  const handleCoinAmountChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const { currency } = props

  return (
    <Container>
      {showPopUp && (
        <PopUpWrap>
          <PopUp>
            <select
            // name="currency"
            // id="current-currency"
            // value={props.currency}
            // onChange={props.handleChangeCurrency}
            >
              {/* {Object.keys(props.currencyList).map((currency) => {
                  return (
                    <option value={currency} key={keyGen()}>
                      {props.currencyList[currency].name}
                    </option>
                  )
                })} */}
            </select>
            <Input
              type="text"
              onChange={handleCoinAmountChange}
              placeholder="13.029381"
              value={value}
            />
            <Input type="date" />
          </PopUp>
        </PopUpWrap>
      )}
      <ContentContainer>
        <ButtonContainer>
          <ButtonMain onClick={handleClick}>Add Asset</ButtonMain>
        </ButtonContainer>
        <H1>Your statistics</H1>
        {(data && !isLoading && (
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
                          <Label>Current price:</Label>{' '}
                          <ColumnCurrentPrice
                            price={current_price}
                            currency={currency}
                          />
                        </Item>
                        <Item>
                          <Label>Price change 24h:</Label>
                          <ColumnTwentyFourHourChange
                            currency={currency}
                            symbol={symbol}
                            twentyFourHourChange={twentyFourHourChange}
                          />
                        </Item>
                        <Item>
                          <Label>Vol / Market Cap:</Label>
                          <ColorGreen>
                            {marketCapTotalVolumePercent}%
                          </ColorGreen>
                          <PercentDisplay percent={marketCapTotalVolumePercent}>
                            <Circle percent={marketCapTotalVolumePercent} />
                          </PercentDisplay>
                        </Item>
                        <Item>
                          <Label>Circ / Total Supply:</Label>
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
                          <Label>Coin amt:</Label> 1.6
                        </Item>
                        <Item>
                          <Label>Amount val</Label> 1.6 * Price
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
