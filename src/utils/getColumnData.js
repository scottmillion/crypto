export function getColumnData(data) {
  const columnNumber = data.map((_, index) => index + 1)
  const columnName = data.map(({ image, name, symbol }) => ({
    image,
    name,
    symbol,
  }))
  const columnCurrentPrice = data.reduce(
    (arr, { current_price: currentPrice }, index) => [...arr, currentPrice],
    [],
  )

  const columnHourChange = data.map(
    ({ price_change_percentage_1h_in_currency: hourChange, symbol }) => ({
      hourChange,
      symbol,
    }),
  )
  const columnTwentyFourHourChange = data.map(
    ({
      price_change_percentage_24h_in_currency: twentyFourHourChange,
      symbol,
    }) => ({
      symbol,
      twentyFourHourChange,
    }),
  )
  const columnSevenDayChange = data.map(
    ({ price_change_percentage_7d_in_currency: sevenDayChange, symbol }) => ({
      sevenDayChange,
      symbol,
    }),
  )
  const columnVolumeMarketCap = data.map(
    ({ market_cap: marketCap, total_volume: totalVolume }) => ({
      marketCap,
      totalVolume,
    }),
  )
  const columnCirculatingTotalSupply = data.map(
    ({ circulating_supply: circulatingSupply, total_supply: totalSupply }) => ({
      circulatingSupply,
      totalSupply,
    }),
  )
  const columnCoinListChartLast7d = data.map(
    ({
      price_change_percentage_7d_in_currency: sevenDayChange,
      sparkline_in_7d: sevenDayPriceList,
    }) => ({
      sevenDayChange,
      sevenDayPriceList,
    }),
  )

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
