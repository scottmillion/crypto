import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinData } from 'store/coin/actions.js'
import { ColumnCurrentPrice, LoadingBox, PercentDisplay } from 'components'

import {
  BluePlus,
  CoinData,
  CoinDataItem,
  CoinDataLabel,
  CoinHomepage,
  CoinInfo,
  CoinPrices,
  CoinSummary,
  Container,
  ContentContainer,
  Description,
  H1,
  H2,
  Hr,
  LinkList,
  Img,
  ImgWrap,
  CoinInfoWrap,
  LinkListItem,
} from './Coin.css'

import { keyGen } from 'utils'

const Coin = (props) => {
  const coinId = props.match.params.name
  const { currency } = useSelector((state) => state.config)
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector((state) => state.coin)

  useEffect(() => {
    dispatch(getCoinData(coinId))
    // eslint-disable-next-line
  }, [coinId])

  const { name, image, symbol, links, market_data } = data || {}

  const {
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
    circulating_supply,
    current_price,
    fully_diluted_valuation,
    market_cap,
    market_cap_change_percentage_24h_in_currency,
    max_supply,
    total_volume,
  } = market_data || {}

  return (
    <Container>
      <ContentContainer>
        <H1>Your Summary:</H1>
        {isLoading && <LoadingBox height={300} />}
        {error && <div>API ERROR</div>}
        {!isLoading && !error && data && (
          <>
            <CoinSummary>
              <CoinInfoWrap>
                <CoinInfo>
                  <ImgWrap>
                    <Img src={image.large} alt="" />
                  </ImgWrap>
                  {name} ({symbol.toUpperCase()})
                  
                  {links.homepage.length > 0 && <CoinHomepage>
                    <a href={links.homepage[0]} key={keyGen()}>{links.homepage[0]}</a>
                  </CoinHomepage>}
                
                </CoinInfo>
                
              </CoinInfoWrap>

              <CoinPrices>
                <div>
                  <span style={{ fontSize: '36px', fontWeight: 600 }}>
                    <ColumnCurrentPrice price={current_price[currency]} />
                  </span>
                  {data.market_data.price_change_percentage_24h}%
                  <div>@styled-icons/bootstrap/Stack</div>
                </div>
                <div>
                  All Time High:
                  <ColumnCurrentPrice price={ath[currency]} />
                </div>
                <div>{ath_change_percentage[currency].toFixed(2)}%</div>
                <div>{ath_date[currency].slice(0, 10)}</div>
                <Hr />
                <div>
                  All Time Low:
                  <ColumnCurrentPrice price={atl[currency]} />
                </div>
                <div>{atl_change_percentage[currency].toFixed(2)}%</div>
                <div>{atl_date[currency].slice(0, 10)}</div>
              </CoinPrices>
              <CoinData>
                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel>Market Cap: </CoinDataLabel>
                  <ColumnCurrentPrice price={market_cap[currency]} />
                  {` ${market_cap_change_percentage_24h_in_currency[currency]}`}
                  %
                </CoinDataItem>

                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel>Fully Diluted Valuation: </CoinDataLabel>
                  <ColumnCurrentPrice
                    price={fully_diluted_valuation[currency]}
                  />
                </CoinDataItem>

                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel>Volume 24h: </CoinDataLabel>
                  <ColumnCurrentPrice price={total_volume[currency]} />
                </CoinDataItem>

                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel>Volume / Market: </CoinDataLabel>
                  {(total_volume[currency] / market_cap[currency])
                    .toString()
                    .slice(0, 8) + '...'}
                </CoinDataItem>

                <Hr />

                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel color="#1ad761">Total Volume: </CoinDataLabel>
                  {`${Math.round(
                    total_volume[currency] / current_price[currency],
                  )} ${data.symbol.toUpperCase()}`}
                </CoinDataItem>

                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel>Circulating Supply: </CoinDataLabel>
                  {`${circulating_supply} ${data.symbol.toUpperCase()}`}
                </CoinDataItem>

                <CoinDataItem>
                  <BluePlus />
                  <CoinDataLabel color="#2172e5">Max Supply: </CoinDataLabel>
                  {`${max_supply || Infinity} ${data.symbol.toUpperCase()}`}
                </CoinDataItem>

                <PercentDisplay
                  marginTop={8}
                  val1={total_volume[currency] / current_price[currency]}
                  val2={circulating_supply}
                  total={max_supply || Infinity}
                />

                {/* <div>-------------</div>
                <div>24hr High: {data.market_data.high_24h[currency]}</div>
                <div>24hr Low: {data.market_data.low_24h[currency]}</div>
                <div>
                  24h Price Change %:{' '}
                  
                </div>
                <div>
                  7d Price Change %:{' '}
                  {data.market_data.price_change_percentage_7d}%
                </div>
                <div>
                  14d PC%: {data.market_data.price_change_percentage_14d}%
                </div>
                <div>
                  30d PC%: {data.market_data.price_change_percentage_30d}%
                </div>
                <div>
                  60d PC% {data.market_data.price_change_percentage_60d}%
                </div>
                <div>
                  200d PC%: {data.market_data.price_change_percentage_200d}%
                </div>
                <div>
                  1yr PC%: {data.market_data.price_change_percentage_1y}%
                </div>
                <div>
                  Market Cap 24h C%:
                  {data.market_data.market_cap_change_percentage_24h}%
                </div>
                <div>
                  Market Cap 24h C% in currency
                  {
                    data.market_data
                      .market_cap_change_percentage_24h_in_currency[currency]
                  }
                  %
                </div>

                <div>----------</div> */}
              </CoinData>
            </CoinSummary>

            <H2>Description:</H2>

            <Description dangerouslySetInnerHTML={{ __html: data.description.en }} />

            <LinkList>
                {data.links.blockchain_site.length >= 3 &&
                (<><LinkListItem>
                      <a href={data.links.blockchain_site[0]} key={keyGen()}>{data.links.blockchain_site[0]}</a>
              </LinkListItem>
              <LinkListItem>
                      <a href={data.links.blockchain_site[1]} key={keyGen()}>{data.links.blockchain_site[1]}</a>
              </LinkListItem>
              <LinkListItem>
                      <a href={data.links.blockchain_site[2]} key={keyGen()}>{data.links.blockchain_site[2]}</a>
              </LinkListItem></>)
                }
              
            </LinkList>
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default Coin
