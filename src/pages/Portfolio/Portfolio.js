import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ColumnCurrentPrice,
  ColumnTwentyFourHourChange,
  LoadingBox,
  PortfolioPopUp,
} from 'components'
import { keyGen } from 'utils'
import { deleteCoin, getCoinsData } from 'store/portfolio/actions.js'
import {
  ButtonContainer,
  ButtonMain,
  ColorGreen,
  CoinDataRow,
  Container,
  Content,
  ContentContainer,
  DeleteCoin,
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
} from './Portfolio.css'

const Portfolio = () => {
  const [showPopUp, setShowPopUp] = useState(false)
  const dispatch = useDispatch()

  const { currency } = useSelector((state) => state.config)
  const { isLoading, myCoins, data } = useSelector((state) => state.portfolio)

  useEffect(() => {
    dispatch(getCoinsData())
    // eslint-disable-next-line
  }, [myCoins, currency])

  return (
    <Container>
      {showPopUp && (
        <PortfolioPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      )}
      <ContentContainer>
        <ButtonContainer>
          <ButtonMain onClick={() => setShowPopUp(!showPopUp)}>
            Add Asset
          </ButtonMain>
        </ButtonContainer>
        <H1>Your statistics</H1>
        {isLoading && <LoadingBox height={300} />}
        {myCoins.length > 0 && data.length > 0 && !isLoading && (
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
              const { amountOwned, purchaseDate, historicPrice } = myCoins.find(
                (coin) => coin.coinId === id,
              )

              return (
                <Row key={keyGen()}>
                  <CoinInfoWrap>
                    <CoinInfo>
                      <ImgWrap>
                        <Img src={image} alt={id} />
                      </ImgWrap>
                      {name} ({symbol.toUpperCase()})
                      <DeleteCoin onClick={() => dispatch(deleteCoin(id))}>
                        &times;
                      </DeleteCoin>
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
                            twentyFourHourChange={twentyFourHourChange || 0}
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
                          <Label>Amt:</Label> {amountOwned}
                        </Item>
                        <Item>
                          <Label>Value:</Label>
                          <ColumnCurrentPrice
                            price={amountOwned * current_price}
                          />
                        </Item>
                        <Item>
                          <Label>Price change since purchase</Label>
                          {Math.round(
                            (((current_price - historicPrice[currency]) /
                              historicPrice[currency]) *
                              100 +
                              Number.EPSILON) *
                              100,
                          ) / 100 || '-'}
                          %
                        </Item>
                        <Item>
                          <Label>Purchase date</Label> {purchaseDate}
                        </Item>
                      </ItemRow>
                    </CoinDataRow>
                  </CoinData>
                </Row>
              )
            })}
          </Content>
        )}
      </ContentContainer>
    </Container>
  )
}

export default Portfolio
