import { CoinDataWrap, MarginLeft } from './CoinData.css'
import {
  ColumnCurrentPrice,
  ColumnTwentyFourHourChange,
  CoinDataItem,
  PercentDisplay,
} from 'components'
import { useSelector } from 'react-redux'

const CoinData = (props) => {
  const {
    circulating_supply,
    current_price,
    fully_diluted_valuation,
    market_cap,
    market_cap_change_percentage_24h_in_currency,
    max_supply,
    total_volume,
  } = props.marketData || {}

  const { symbol } = props
  const { currency } = useSelector((state) => state.config)
  return (
    <CoinDataWrap>
      <CoinDataItem label="Market Cap:">
        <ColumnCurrentPrice price={market_cap[currency]} />
        <MarginLeft>
          <ColumnTwentyFourHourChange
            twentyFourHourChange={
              market_cap_change_percentage_24h_in_currency[currency]
            }
          />
        </MarginLeft>
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
    </CoinDataWrap>
  )
}

export default CoinData
