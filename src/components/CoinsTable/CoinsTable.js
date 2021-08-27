import React from 'react'
import {
  ColumnCirculatingTotalSupply,
  ColumnCoinListChartLast7d,
  ColumnCurrentPrice,
  ColumnHourChange,
  ColumnLabels,
  ColumnName,
  ColumnNumber,
  ColumnSevenDayChange,
  ColumnTwentyFourHourChange,
  ColumnVolumeMarketCap,
  LoadingBox,
} from 'components'
import {
  coinListPercentDisplayColors as colors,
  desktopCellWidths as widths,
  keyGen,
  screenSizeWidth,
} from 'utils'
import { Hr, Row, RowWrap, Table } from './CoinsTable.css'
import Media from 'react-media'

const CoinsTable = (props) => {
  const { data, isLoading } = props
  return (
    <Table>
      {(!isLoading && data && (
        <Media
          queries={{
            desktopS: screenSizeWidth.desktopS,
            desktopM: screenSizeWidth.desktopM,
            desktopL: screenSizeWidth.desktopL,
            desktopXL: screenSizeWidth.desktopXL,
          }}
        >
          {(matches) => (
            <>
              {(matches.desktopS && (
                <>
                  <Row isLabel={true}>
                    <ColumnLabels />
                  </Row>
                  {data.map((coin, index, arr) => {
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
                    return (
                      <RowWrap key={keyGen()}>
                        <Row>
                          <ColumnNumber number={index + 1} width={widths[0]} />

                          <ColumnName
                            image={image}
                            name={name}
                            symbol={symbol}
                            width={widths[1]}
                          />

                          <ColumnCurrentPrice
                            price={current_price}
                            currency={props.currency}
                            width={widths[2]}
                          />

                          <ColumnHourChange
                            currentPrice={current_price}
                            currency={props.currency}
                            hourChange={hourChange}
                            symbol={symbol}
                            width={widths[3]}
                          />

                          <ColumnTwentyFourHourChange
                            currency={props.currency}
                            symbol={symbol}
                            width={widths[4]}
                            twentyFourHourChange={twentyFourHourChange}
                          />

                          <ColumnSevenDayChange
                            sevenDayChange={sevenDayChange}
                            symbol={symbol}
                            width={widths[5]}
                          ></ColumnSevenDayChange>

                          {matches.desktopM && (
                            <ColumnVolumeMarketCap
                              width={widths[6]}
                              color1={colors[index][0]}
                              color2={colors[index][1]}
                              currency={props.currency}
                              marketCap={market_cap}
                              totalVolume={total_volume}
                            />
                          )}
                          {matches.desktopXL && (
                            <ColumnCirculatingTotalSupply
                              width={widths[7]}
                              color1={colors[index][0]}
                              color2={colors[index][1]}
                              currency={props.currency}
                              circulatingSupply={circulating_supply}
                              totalSupply={total_supply}
                            />
                          )}
                          {matches.desktopL && (
                            <ColumnCoinListChartLast7d
                              width={widths[8]}
                              sevenDayChange={sevenDayChange}
                              sevenDayPriceList={sevenDayPriceList}
                            />
                          )}
                        </Row>
                        {index !== arr.length - 1 && <Hr />}
                      </RowWrap>
                    )
                  })}
                </>
              )) || <div>Mobile</div>}
            </>
          )}
        </Media>
      )) || <LoadingBox height={250} />}
    </Table>
  )
}

export default CoinsTable
