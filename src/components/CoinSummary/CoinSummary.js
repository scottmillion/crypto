import {
  AllTimeStats,
  CoinDataItem,
  ColumnCurrentPrice,
  LinkItem,
  PercentDisplay,
} from 'components'
import {
  CoinData,
  CoinInfo,
  CoinInfoWrap,
  CoinPrices,
  CoinSummaryWrap,
  Img,
  ImgWrap,
  StackSmall,
} from './CoinSummary.css'
import { useSelector } from 'react-redux'

const CoinSummary = (props) => {
  const { currency } = useSelector((state) => state.config)
  const { name, image, symbol, links, market_data } = props.data || {}
  const {
    circulating_supply,
    current_price,
    fully_diluted_valuation,
    market_cap,
    market_cap_change_percentage_24h_in_currency,
    max_supply,
    total_volume,
  } = market_data || {}

  return (
    <CoinSummaryWrap>
      <CoinInfoWrap>
        <CoinInfo>
          <ImgWrap>
            <Img src={image.large} alt="" />
          </ImgWrap>
          {name} ({symbol.toUpperCase()})
          {links.homepage.length > 0 && (
            <LinkItem
              url={links.homepage[0]}
              themeColor="primary"
              padding="4px 0px"
              marginTop="18px"
            />
          )}
        </CoinInfo>
      </CoinInfoWrap>

      <CoinPrices>
        <div>
          <span style={{ fontSize: '36px', fontWeight: 600 }}>
            <ColumnCurrentPrice price={current_price[currency]} />
          </span>
          {market_data.price_change_percentage_24h}%
          <div>
            <StackSmall />
          </div>
        </div>

        <AllTimeStats marketData={market_data} />
      </CoinPrices>

      <CoinData>
        <CoinDataItem label="Market Cap:">
          <ColumnCurrentPrice price={market_cap[currency]} />
          {` ${market_cap_change_percentage_24h_in_currency[currency]}`}%
        </CoinDataItem>

        <CoinDataItem label="Fully Diluted Valuation:">
          <ColumnCurrentPrice price={fully_diluted_valuation[currency]} />
        </CoinDataItem>

        <CoinDataItem label="Volume 24h:">
          <ColumnCurrentPrice price={total_volume[currency]} />
        </CoinDataItem>

        <CoinDataItem label="Volume / Market:">
          {(total_volume[currency] / market_cap[currency])
            .toString()
            .slice(0, 8) + '...'}
        </CoinDataItem>

        <br />

        <CoinDataItem label="Total Volume:" color="#1ad761">
          {`${Math.round(
            total_volume[currency] / current_price[currency],
          )} ${symbol.toUpperCase()}`}
        </CoinDataItem>

        <CoinDataItem label="Circulating Supply:">
          {`${circulating_supply} ${symbol.toUpperCase()}`}
        </CoinDataItem>

        <CoinDataItem label="Max Supply:" color="#2172e5">
          {`${max_supply || Infinity} ${symbol.toUpperCase()}`}
        </CoinDataItem>

        <PercentDisplay
          marginTop={8}
          val1={total_volume[currency] / current_price[currency]}
          val2={circulating_supply}
          total={max_supply || Infinity}
        />
      </CoinData>
    </CoinSummaryWrap>
  )
}

export default CoinSummary
