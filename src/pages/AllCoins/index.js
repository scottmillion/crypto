import React from 'react'
import axios from 'axios'
import {
  ChartPrice,
  ChartVolume,
  ChartsContainer,
  ChartContainerPrice,
  ChartContainerVolume,
  CoinContainer,
  Container,
  ContentContainer,
  H1,
} from './AllCoins.css'
import BitcoinLineChart from 'components/BitcoinLineChart'
import BitcoinBarChart from 'components/BitcoinBarChart'
import { ChartLegendPrice } from 'components/ChartLegendPrice'
import { ChartLegendVolume } from 'components/ChartLegendVolume'
import { ColumnLabels } from 'components/ColumnLabels'
import { CoinRows } from 'components/CoinRows'

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
                  <ChartLegendPrice
                    data={data}
                    currencySymbol={this.props.currencySymbol}
                  />
                  <ChartPrice>
                    <BitcoinLineChart
                      currency={this.props.currency}
                      theme={this.props.theme}
                    />
                  </ChartPrice>
                </ChartContainerPrice>
                <ChartContainerVolume theme={this.props.theme}>
                  <ChartLegendVolume
                    data={data}
                    currencySymbol={this.props.currencySymbol}
                  />
                  <ChartVolume>
                    <BitcoinBarChart
                      currency={this.props.currency}
                      theme={this.props.theme}
                    />
                  </ChartVolume>
                </ChartContainerVolume>
              </ChartsContainer>

              <CoinContainer theme={this.props.theme}>
                <ColumnLabels />
                <CoinRows
                  data={data}
                  currency={this.props.currency}
                  theme={this.props.theme}
                />
              </CoinContainer>
            </>
          )}
        </ContentContainer>
      </Container>
    )
  }
}

export default AllCoins
