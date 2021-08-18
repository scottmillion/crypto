import React from 'react'
import axios from 'axios'
import {
  BulletPoint,
  Cell,
  CellItem,
  CellItemNumber,
  ChartPrice,
  ChartVolume,
  ChartsContainer,
  ChartContainerPrice,
  ChartContainerVolume,
  ChartLegendPrice,
  ChartLegendVolume,
  Circle,
  CoinContainer,
  Container,
  ContentContainer,
  H1,
  Img,
  LegendLarge,
  LegendNormal,
  PercentDisplay,
  Row,
} from './AllCoins.css'
import BitcoinLineChart from 'components/BitcoinLineChart'
import BitcoinBarChart from 'components/BitcoinBarChart'
import CoinListChart from 'components/CoinListChart'
import { keyGen } from 'utils/keyGen'
import { getArrow } from 'utils/getArrow'
import { formatChartNumber } from 'utils/formatChartNumber'
import { convertLargeNumber } from 'utils/convertLargeNumber'
import { Arrow } from 'components/Arrow'
import { shorterNumber } from 'utils/shorterNumber'

import { formatCurrency } from '@coingecko/cryptoformat'

class AllCoins extends React.Component {
  state = {
    data: null,
  }

  getData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currency}&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20dogecoin%2C%20binancecoin%2C%20cardano%2C%20usd-coin%2C%20wrapped-bitcoin%2C%20litecoin&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
      )
      this.setState({ data })
    } catch (error) {
      console.log('Error in getData API!')
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData()
  }

  fontWeightBold = 700
  labels = [
    '#',
    'Name',
    'Price',
    '1h%',
    '24h%',
    '7d%',
    '24h Volume/Market Cap',
    'Circulating/Total Supply',
    'Last 7d',
  ]
  labelsFontSize = 16
  rowsFontSize = 19
  widths = [18, 280, 122, 90, 90, 90, 270, 270, 120]
  colors = [
    ['rgb(255, 181, 40)', 'rgb(254, 225, 88)'],
    ['rgb(71, 76, 119)', 'rgb(138, 146, 178)'],
    ['rgb(27, 162, 122)', 'rgb(255, 255, 255)'],
    ['rgb(187, 159, 51)', 'rgb(228, 205, 130)'],
    ['rgb(254, 125, 67)', 'rgb(255, 220, 206)'],
    ['rgb(179, 64, 74)', 'rgb(244, 178, 176)'],
    ['rgb(39, 117, 201)', 'rgb(255, 255, 255)'],
    ['rgb(131, 128, 139)', 'rgb(240, 146, 66)'],
    ['rgb(52, 93, 157)', 'rgb(255, 255, 255)'],
  ]
  today = new Date()
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  render() {
    const data = this.state.data
    return (
      <Container>
        <ContentContainer>
          <H1>Overview</H1>

          {!data && <div>Loading Data API...</div>}

          {data && (
            <>
              <ChartsContainer>
                <ChartContainerPrice theme={this.props.theme}>
                  <ChartLegendPrice>
                    <LegendNormal>BTC</LegendNormal>
                    <LegendLarge>
                      {this.props.currencySymbol}
                      {formatChartNumber(
                        data.filter((item) => item.id === 'bitcoin')[0]
                          .current_price,
                      )}
                    </LegendLarge>
                    <LegendNormal>
                      {this.monthNames[this.today.getMonth()]}{' '}
                      {this.today.getDate()}, {this.today.getFullYear()}
                    </LegendNormal>
                  </ChartLegendPrice>
                  <ChartPrice>
                    <BitcoinLineChart currency={this.props.currency} />
                  </ChartPrice>
                </ChartContainerPrice>
                <ChartContainerVolume theme={this.props.theme}>
                  <ChartLegendVolume>
                    <LegendNormal>Volume 24h</LegendNormal>
                    <LegendLarge>
                      {this.props.currencySymbol}
                      {formatChartNumber(
                        data.filter((item) => item.id === 'bitcoin')[0]
                          .total_volume,
                      )}
                    </LegendLarge>
                    <LegendNormal>
                      {this.monthNames[this.today.getMonth()]}{' '}
                      {this.today.getDate()}, {this.today.getFullYear()}
                    </LegendNormal>
                  </ChartLegendVolume>
                  <ChartVolume>
                    <BitcoinBarChart currency={this.props.currency} />
                  </ChartVolume>
                </ChartContainerVolume>
              </ChartsContainer>

              <CoinContainer theme={this.props.theme}>
                <Row>
                  {this.widths.map((width, index) => (
                    <Cell
                      key={keyGen()}
                      width={width}
                      weight={this.fontWeightBold}
                      size={this.labelsFontSize}
                    >
                      {this.labels[index]}
                    </Cell>
                  ))}
                </Row>
                {data.map((coin, index) => {
                  const widths = this.widths
                  const colors = this.colors
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
                    <Row key={keyGen()}>
                      <Cell key={keyGen()} width={widths[0]}>
                        {index + 1}
                      </Cell>

                      <Cell key={keyGen()} width={widths[1]}>
                        <Img src={image} alt={name} />
                        {name} ({symbol.toUpperCase()})
                      </Cell>

                      <Cell key={keyGen()} width={widths[2]}>
                        {convertLargeNumber(
                          formatCurrency(
                            current_price,
                            this.props.currency,
                            'en',
                          ),
                        )}
                      </Cell>

                      <Cell
                        key={keyGen()}
                        width={widths[3]}
                        number={hourChange}
                      >
                        {(this.props.currency !== symbol && (
                          <>
                            <Arrow content={getArrow(hourChange)} />
                            {Math.abs(hourChange.toFixed(2))}%
                          </>
                        )) || <span>-</span>}
                      </Cell>

                      <Cell
                        key={keyGen()}
                        width={widths[4]}
                        number={twentyFourHourChange}
                      >
                        {(this.props.currency !== coin.symbol && (
                          <>
                            <Arrow content={getArrow(twentyFourHourChange)} />
                            {Math.abs(twentyFourHourChange.toFixed(2))}%
                          </>
                        )) || <span>-</span>}
                      </Cell>

                      <Cell
                        key={keyGen()}
                        width={widths[5]}
                        number={sevenDayChange}
                      >
                        {(this.props.currency !== symbol && (
                          <>
                            <Arrow content={getArrow(sevenDayChange)} />
                            {Math.abs(sevenDayChange.toFixed(2))}%
                          </>
                        )) || <span>-</span>}
                      </Cell>

                      <Cell key={keyGen()} width={widths[6]}>
                        <CellItem>
                          <CellItemNumber color={colors[index][0]}>
                            <BulletPoint>&#8226;</BulletPoint>
                            {shorterNumber(
                              formatCurrency(
                                total_volume,
                                this.props.currency,
                                'en',
                              ),
                            )}
                          </CellItemNumber>
                          <CellItemNumber color={colors[index][1]}>
                            <BulletPoint>&#8226;</BulletPoint>
                            {shorterNumber(
                              formatCurrency(
                                market_cap,
                                this.props.currency,
                                'en',
                              ),
                            )}
                          </CellItemNumber>
                        </CellItem>
                        <PercentDisplay
                          percent={(100 * total_volume) / market_cap}
                          color1={colors[index][0]}
                          color2={colors[index][1]}
                        >
                          <Circle
                            color1={colors[index][0]}
                            percent={(100 * total_volume) / market_cap}
                          />
                        </PercentDisplay>
                      </Cell>

                      <Cell key={keyGen()} width={widths[7]}>
                        <CellItem>
                          <CellItemNumber color={colors[index][0]}>
                            <BulletPoint>&#8226;</BulletPoint>
                            {shorterNumber(
                              formatCurrency(
                                circulating_supply,
                                this.props.currency,
                                'en',
                              ),
                            ).slice(1)}
                          </CellItemNumber>
                          <CellItemNumber color={colors[index][1]}>
                            <BulletPoint>&#8226;</BulletPoint>
                            {(total_supply &&
                              shorterNumber(
                                formatCurrency(
                                  total_supply,
                                  this.props.currency,
                                  'en',
                                ),
                              ).slice(1)) || <span>&#8734;</span>}
                          </CellItemNumber>
                        </CellItem>
                        <PercentDisplay
                          percent={
                            (100 * circulating_supply) /
                            (total_supply || Infinity)
                          }
                          color1={colors[index][0]}
                          color2={colors[index][1]}
                        >
                          <Circle
                            color1={colors[index][0]}
                            percent={
                              (100 * circulating_supply) /
                              (total_supply || Infinity)
                            }
                          />
                        </PercentDisplay>
                      </Cell>

                      <Cell key={keyGen()} width={widths[8]}>
                        <CoinListChart
                          prices={sevenDayPriceList.price.filter(
                            (_, index) => index % 8 === 0,
                          )}
                          sevenDayChange={sevenDayChange}
                        />
                      </Cell>
                    </Row>
                  )
                })}
              </CoinContainer>
            </>
          )}
        </ContentContainer>
      </Container>
    )
  }
}

export default AllCoins
