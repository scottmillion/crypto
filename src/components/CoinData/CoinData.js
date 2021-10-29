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

  const { currency } = useSelector((state) => state.config)
  const { symbol } = props
  const circulatingSupply = `${circulating_supply} ${symbol.toUpperCase()}`
  const fullyDilutedVal = fully_diluted_valuation[currency]
  const marketCap = market_cap[currency]
  const marketCapChange = market_cap_change_percentage_24h_in_currency[currency]
  const maxSupply = `${max_supply || Infinity} ${symbol.toUpperCase()}`
  const totalVolume = `${Math.round(
    total_volume[currency] / current_price[currency],
  )} ${symbol.toUpperCase()}`
  const volume24hr = total_volume[currency]
  const volumeToMarket =
    (total_volume[currency] / market_cap[currency]).toString().slice(0, 8) +
    '...'

  return (
    <CoinDataWrap>
      <CoinDataItem label="Market Cap:">
        <ColumnCurrentPrice price={marketCap} />
        <MarginLeft>
          <ColumnTwentyFourHourChange twentyFourHourChange={marketCapChange} />
        </MarginLeft>
      </CoinDataItem>
      <CoinDataItem label="Fully Diluted Valuation:">
        <ColumnCurrentPrice price={fullyDilutedVal} />
      </CoinDataItem>
      <CoinDataItem label="Volume 24h:">
        <ColumnCurrentPrice price={volume24hr} />
      </CoinDataItem>
      <CoinDataItem label="Volume / Market:">{volumeToMarket}</CoinDataItem>
      <br />
      <CoinDataItem label="Total Volume:" color="#1ad761">
        {totalVolume}
      </CoinDataItem>
      <CoinDataItem label="Circulating Supply:">
        {circulatingSupply}
      </CoinDataItem>
      <CoinDataItem label="Max Supply:" color="#2172e5">
        {maxSupply}
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
