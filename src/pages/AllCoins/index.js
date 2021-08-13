import React from 'react'
import axios from 'axios'
// import LineChart from 'components/Chart'
import { prettierNumber } from 'utils/prettierNumber'
import { Cell, CoinContainer, Container, ContentContainer, H1, Img, Row } from './AllCoins.css'
// import BitcoinLineChart from 'components/BitcoinLineChart'
import CoinListChart from 'components/CoinListChart'


class AllCoins extends React.Component {
  state = {
    data: null,
  }

  getData = async () => {
      try {
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currency}&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20dogecoin%2C%20binancecoin%2C%20cardano%2C%20usd-coin%2C%20wrapped-bitcoin%2C%20litecoin&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`);
        this.setState({ data });
      } catch(error) {
        console.log("Error in getData API!");
        console.log(error);
      }
  }

  componentDidMount() {
    this.getData();
  }

  fontWeightBold = 700;
  labels = ["#", "Name", "Price", "1h%", "24h%", "7d%", "24h Volume/Market Cap", "Circulating/Total Supply", "Last 7 Day"];
  labelsFontSize = 16;
  rowsFontSize = 19;
  widths = [18, 280, 80, 80, 80, 80, 230, 230, 110];

  render() {
    return (
      <Container>
          <ContentContainer>
          <H1>Your overview</H1>
          
          <div>CHARTS</div>
            {!this.state.data && <div>Loading Data API...</div>}
            
           {this.state.data && (
            <CoinContainer>
                <Row>
                  {this.widths.map((width, index) => <Cell key={width + index + 'xyz'} width={width} weight={this.fontWeightBold} size={this.labelsFontSize}>{this.labels[index]}</Cell>)}
                </Row>
              {this.state.data.map((coin, index) => {
                return (
                <Row key={index + coin.name + "r"}>
                  <Cell key={coin.name + index + 'abc'} width={this.widths[0]} >{index + 1}</Cell>
                  <Cell key={coin.name + index + 'cde'} width={this.widths[1]} ><Img src={coin.image} alt={coin.name} />&nbsp;&nbsp;{coin.name} ({coin.symbol.toUpperCase()})</Cell>
                  <Cell key={coin.name + index + 'ggg'} width={this.widths[2]} >{this.props.symbol}{prettierNumber(coin.current_price.toFixed())}</Cell>
                  <Cell key={coin.name + index + 'qqq'} width={this.widths[3]} >{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</Cell>
                  <Cell key={coin.name + index + 'rrr'} width={this.widths[4]} >{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</Cell>
                  <Cell key={coin.name + index + 'ttt'} width={this.widths[5]} >{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</Cell>
                  <Cell key={coin.name + index + 'acc'} width={this.widths[6]} >{prettierNumber(coin.total_volume)} / {prettierNumber(coin.market_cap)}</Cell>
                  <Cell key={coin.name + index + 'qrs'} width={this.widths[7]} >{prettierNumber(coin.circulating_supply.toFixed())} / {(coin.total_supply && prettierNumber(coin.total_supply.toFixed())) || "Infinite"}</Cell>
                  <Cell key={coin.name + index + 'vbe'} width={this.widths[8]} >
                    <CoinListChart prices={coin.sparkline_in_7d.price} />
                  </Cell>
                </Row>)
              })}
              
            </CoinContainer>
          )}
        </ContentContainer>
      </Container>
    )
  }
}

export default AllCoins
