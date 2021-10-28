import { useSelector } from 'react-redux'
import {
  AllTimeStats,
  CoinData,
  ColumnCurrentPrice,
  ColumnTwentyFourHourChange,
  LinkItem,
} from 'components'
import {
  CoinInfo,
  CoinInfoWrap,
  CoinPrices,
  CoinSummaryWrap,
  ColumnTwentyFourHourChangeWrap,
  CurrentPriceWrap,
  Img,
  ImgWrap,
  StackSmall,
} from './CoinSummary.css'

const CoinSummary = (props) => {
  const { currency } = useSelector((state) => state.config)
  const { name, image, symbol, links, market_data } = props.data || {}
  const coinName = `${name} (${symbol.toUpperCase()})`
  const currentPrice = market_data.current_price[currency] || {}
  const hasHomepage = links.homepage.length > 0
  const homepageUrl = links.homepage[0]
  const priceChange =
    market_data.price_change_percentage_24h_in_currency[currency]

  return (
    <CoinSummaryWrap>
      <CoinInfoWrap>
        <CoinInfo>
          <ImgWrap>
            <Img src={image.large} alt="" />
          </ImgWrap>
          {coinName}
          {hasHomepage && (
            <LinkItem
              url={homepageUrl}
              themeColor="primary"
              padding="4px 0px"
              marginTop="18px"
            />
          )}
        </CoinInfo>
      </CoinInfoWrap>

      <CoinPrices>
        <CurrentPriceWrap>
          <ColumnCurrentPrice price={currentPrice} />
        </CurrentPriceWrap>
        <ColumnTwentyFourHourChangeWrap>
          {priceChange && (
            <ColumnTwentyFourHourChange twentyFourHourChange={priceChange} />
          )}
        </ColumnTwentyFourHourChangeWrap>
        <StackSmall />
        <AllTimeStats marketData={market_data} />
      </CoinPrices>

      <CoinData marketData={market_data} symbol={symbol} />
    </CoinSummaryWrap>
  )
}

export default CoinSummary
