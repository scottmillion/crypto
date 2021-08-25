import axios from 'axios'
import React from 'react'
import { ChartDisplay, CoinsTable } from 'components'
import {
  ChartsContainer,
  CoinContainer,
  Container,
  ContentContainer,
  H1,
} from './AllCoins.css'

class AllCoins extends React.Component {
  state = {
    data: null,
    priceDataLabels: null,
    priceDataPoints: null,
    volumeDataLabels: null,
    volumeDataPoints: null,
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

  getPrices = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=39&interval=daily`,
      )

      const prices = data.prices
      const priceDataPoints = prices.map((price) => price[1])
      const priceDataLabels = prices.map((price) =>
        new Date(price[0]).getDate().toString(),
      )
      this.setState({ priceDataLabels, priceDataPoints })
    } catch (error) {
      console.log('Error in getPrices API!')
      console.log(error)
    }
  }

  getVolumes = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=22&interval=daily`,
      )
      const volumes = data.total_volumes
      const volumeDataPoints = volumes.map((volume) => volume[1])
      const volumeDataLabels = volumes.map((volume) =>
        new Date(volume[0]).getDate().toString(),
      )
      this.setState({
        volumeDataLabels,
        volumeDataPoints,
      })
    } catch (error) {
      console.log('Error in getVolume API!')
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData()
    this.getPrices()
    this.getVolumes()
  }

  render() {
    const {
      data,
      priceDataLabels,
      priceDataPoints,
      volumeDataLabels,
      volumeDataPoints,
    } = this.state
    return (
      <Container>
        <ContentContainer>
          <H1>Overview</H1>

          {!data && <div>Loading Data API...</div>}
          {data && (
            <>
              <ChartsContainer>
                {priceDataLabels && priceDataPoints && (
                  <ChartDisplay
                    dataLabels={priceDataLabels}
                    dataPoints={priceDataPoints}
                    currencySymbol={this.props.currencySymbol}
                    currency={this.props.currency}
                    label="Price"
                    legendDisplayNumber={
                      data.find((item) => item.id === 'bitcoin').current_price
                    }
                    legendTitle="Price"
                    type="Line"
                  />
                )}

                {volumeDataLabels && volumeDataPoints && (
                  <ChartDisplay
                    dataLabels={volumeDataLabels}
                    dataPoints={volumeDataPoints}
                    currencySymbol={this.props.currencySymbol}
                    currency={this.props.currency}
                    label="Volume"
                    legendDisplayNumber={
                      data.find((item) => item.id === 'bitcoin').total_volume
                    }
                    legendTitle="Volume 24h"
                    type="Bar"
                  />
                )}
              </ChartsContainer>
              <CoinContainer>
                <CoinsTable data={data} currency={this.props.currency} />
              </CoinContainer>
            </>
          )}
        </ContentContainer>
      </Container>
    )
  }
}

export default AllCoins
