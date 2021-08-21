export function getColumnData(data) {
  const columnNumber = [],
    columnName = [],
    columnCurrentPrice = [],
    columnHourChange = [],
    columnTwentyFourHourChange = [],
    columnSevenDayChange = [],
    columnVolumeMarketCap = [],
    columnCirculatingTotalSupply = [],
    columnCoinListChartLast7d = []

  data.forEach((coin, index) => {
    const {
      circulating_supply: circulatingSupply,
      current_price: currentPrice,
      image,
      market_cap: marketCap,
      name,
      symbol,
      total_supply: totalSupply,
      total_volume: totalVolume,
      price_change_percentage_1h_in_currency: hourChange,
      price_change_percentage_24h_in_currency: twentyFourHourChange,
      price_change_percentage_7d_in_currency: sevenDayChange,
      sparkline_in_7d: sevenDayPriceList,
    } = coin

    columnNumber.push(index + 1)
    columnName.push({ image, name, symbol })
    columnCurrentPrice.push(currentPrice)
    columnHourChange.push({ hourChange, symbol })
    columnTwentyFourHourChange.push({ symbol, twentyFourHourChange })
    columnSevenDayChange.push({ symbol, sevenDayChange })
    columnVolumeMarketCap.push({ totalVolume, marketCap })
    columnCirculatingTotalSupply.push({ circulatingSupply, totalSupply })
    columnCoinListChartLast7d.push({ sevenDayPriceList, sevenDayChange })
  })

  return {
    columnNumber,
    columnName,
    columnCurrentPrice,
    columnHourChange,
    columnTwentyFourHourChange,
    columnSevenDayChange,
    columnVolumeMarketCap,
    columnCirculatingTotalSupply,
    columnCoinListChartLast7d,
  }
}
