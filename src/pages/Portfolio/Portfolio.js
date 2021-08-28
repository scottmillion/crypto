import React from 'react'
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

class Portfolio extends React.Component {
  state = {
    data: null,
    isLoading: false,
    showPopUp: false,
  }

  getData = async () => {
    this.setState({ isLoading: true })
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currency}&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20dogecoin%2C%20binancecoin%2C%20cardano%2C%20usd-coin%2C%20wrapped-bitcoin%2C%20litecoin&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
      )
      this.setState({ data, isLoading: false })
    } catch (error) {
      console.log('Error in getData API!')
      console.log(error)
    }
  }

  handleClick = () => {
    const showPopUp = !this.state.showPopUp
    this.setState({ showPopUp })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { data, isLoading, showPopUp } = this.state
    console.log(data)
    return (
      <Container>
        {showPopUp && (
          <PopUpWrap>
            <PopUp />
          </PopUpWrap>
        )}
        <ContentContainer>
          <ButtonContainer>
            <ButtonMain onClick={this.handleClick}>Add Asset</ButtonMain>
          </ButtonContainer>
          <H1>Your statistics</H1>
          {(data && !isLoading && (
            <Content>
              {data.map((coin) => {
                const marketCapTotalVolumePercent = Math.round(
                  (100 * coin.total_volume) / coin.market_cap,
                )
                const totalSupply = coin.total_supply || Infinity
                const circulatingTotalSupplyPercent = Math.round(
                  (100 * coin.circulating_supply) / totalSupply,
                )

                return (
                  <Row key={keyGen()}>
                    <CoinInfoWrap>
                      <CoinInfo>
                        <ImgWrap>
                          <Img src={coin.image} alt={coin.id} />
                        </ImgWrap>
                        {coin.name} ({coin.symbol.toUpperCase()})
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
                              price={coin.current_price}
                              currency={this.props.currency}
                            />
                          </Item>
                          <Item>
                            <Label>Price change 24h:</Label>
                            <ColumnTwentyFourHourChange
                              currency={this.props.currency}
                              symbol={coin.symbol}
                              twentyFourHourChange={
                                coin.price_change_percentage_24h_in_currency
                              }
                            />
                          </Item>
                          <Item>
                            <Label>Vol / Market Cap:</Label>
                            <ColorGreen>
                              {Math.round(marketCapTotalVolumePercent)}%
                            </ColorGreen>
                            <PercentDisplay
                              percent={marketCapTotalVolumePercent}
                            >
                              <Circle percent={marketCapTotalVolumePercent} />
                            </PercentDisplay>
                          </Item>
                          <Item>
                            <Label>Circ / Total Supply:</Label>
                            <ColorGreen>
                              {Math.round(circulatingTotalSupplyPercent)}%
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
}

export default Portfolio
