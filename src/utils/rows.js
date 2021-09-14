import {
  ColumnCirculatingTotalSupply,
  ColumnCoinListChartLast7d,
  ColumnCurrentPrice,
  ColumnHourChange,
  ColumnName,
  ColumnNumber,
  ColumnSevenDayChange,
  ColumnTwentyFourHourChange,
  ColumnVolumeMarketCap,
} from 'components'

import { coinListPercentDisplayColors as colors } from 'utils'

export function rows(data) {
  return data.map((coin, index) => {
    const {
      circulating_supply,
      current_price,
      image,
      market_cap,
      name,
      symbol,
      total_supply,
      total_volume,
      price_change_percentage_1h_in_currency: hourChange,
      price_change_percentage_24h_in_currency: twentyFourHourChange,
      price_change_percentage_7d_in_currency: sevenDayChange,
      sparkline_in_7d: sevenDayPriceList,
    } = coin
    const dataset = {}
    dataset.number = <ColumnNumber number={index + 1} />
    dataset.name = <ColumnName image={image} name={name} symbol={symbol} />
    dataset.price = <ColumnCurrentPrice price={current_price} />
    dataset.priceNumeric = current_price
    dataset.hour = (
      <ColumnHourChange
        currentPrice={current_price}
        hourChange={hourChange}
        symbol={symbol}
      />
    )
    dataset.hourNumeric = hourChange
    dataset.hour24 = (
      <ColumnTwentyFourHourChange
        symbol={symbol}
        twentyFourHourChange={twentyFourHourChange}
      />
    )
    dataset.hour24Numeric = twentyFourHourChange
    dataset.days7 = (
      <ColumnSevenDayChange sevenDayChange={sevenDayChange} symbol={symbol} />
    )
    dataset.days7Numeric = sevenDayChange
    dataset.volumeMarketCap = (
      <ColumnVolumeMarketCap
        color1={colors[index % colors.length][0]}
        color2={colors[index % colors.length][1]}
        marketCap={market_cap}
        totalVolume={total_volume}
      />
    )
    dataset.vmcNumeric = total_volume / market_cap
    dataset.circulatingTotalSupply = (
      <ColumnCirculatingTotalSupply
        color1={colors[index % colors.length][0]}
        color2={colors[index % colors.length][1]}
        circulatingSupply={circulating_supply}
        totalSupply={total_supply}
      />
    )
    dataset.ctsNumeric = circulating_supply / (total_supply || Infinity)
    dataset.last7d = (
      <ColumnCoinListChartLast7d
        sevenDayChange={sevenDayChange}
        sevenDayPriceList={sevenDayPriceList}
      />
    )
    return dataset
  })
}
