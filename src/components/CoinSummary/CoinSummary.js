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
  const { current_price } = market_data || {}

  return (
    <CoinSummaryWrap>
      <CoinInfoWrap>
        <CoinInfo>
          <ImgWrap>
            <Img src={image.large} alt="" />
          </ImgWrap>
          {`${name} (${symbol.toUpperCase()})`}
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
        <CurrentPriceWrap>
          <ColumnCurrentPrice price={current_price[currency]} />
        </CurrentPriceWrap>
        <ColumnTwentyFourHourChangeWrap>
          {market_data.price_change_percentage_24h_in_currency[currency] && (
            <ColumnTwentyFourHourChange
              twentyFourHourChange={
                market_data.price_change_percentage_24h_in_currency[currency]
              }
            />
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
