import React from 'react'
import axios from 'axios'
// import LineChart from 'components/Chart'
import { prettierNumber } from 'utils/prettierNumber'
import { Cell, ChartPrice, ChartVolume, ChartsContainer, ChartContainerPrice, ChartContainerVolume, ChartLegendPrice, ChartLegendVolume, CoinContainer, Container, ContentContainer, H1, Img, LegendLarge, LegendNormal, Row } from './AllCoins.css'
import BitcoinLineChart from 'components/BitcoinLineChart'
import BitcoinBarChart from 'components/BitcoinBarChart'
import CoinListChart from 'components/CoinListChart'
import { keyGen } from 'utils/keyGen'
import { getArrow } from 'utils/getArrow'
import Arrow from 'components/Arrow'



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
  today = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
 
  render() {
    
    
    return (
      <Container>
          <ContentContainer>
          <H1>Your overview</H1>         
          <ChartsContainer>
            <ChartContainerPrice>
              <ChartLegendPrice>
                <LegendNormal>BTC</LegendNormal>
                <LegendLarge>$12.233 mln</LegendLarge>
                <LegendNormal>{this.monthNames[this.today.getMonth()]} {this.today.getDate()}, {this.today.getFullYear()}</LegendNormal>
              </ChartLegendPrice>
              <ChartPrice>
                <BitcoinLineChart/>
              </ChartPrice>
            </ChartContainerPrice>
            <ChartContainerVolume>
            <ChartLegendVolume>
                <LegendNormal>Volume 24h</LegendNormal>
                <LegendLarge>$807.24 bln</LegendLarge>
                <LegendNormal>{this.monthNames[this.today.getMonth()]} {this.today.getDate()}, {this.today.getFullYear()}</LegendNormal>
              </ChartLegendVolume>
              <ChartVolume><BitcoinBarChart/></ChartVolume>
            </ChartContainerVolume>
          </ChartsContainer>
            {!this.state.data && <div>Loading Data API...</div>}
            
           {this.state.data && (
            <CoinContainer>
                <Row>
                  {this.widths.map((width, index) => <Cell key={keyGen()} width={width} weight={this.fontWeightBold} size={this.labelsFontSize}>{this.labels[index]}</Cell>)}
                </Row>
              {this.state.data.map((coin, index) => {
                return (
                <Row key={keyGen()}>

                  <Cell 
                    key={keyGen()} 
                    width={this.widths[0]} 
                  >
                    {index + 1}
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[1]} 
                  >
                    <Img src={coin.image} alt={coin.name} />
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[2]} 
                  >
                    {this.props.symbol}
                    {prettierNumber(coin.current_price.toFixed())}
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[3]} 
                    number={coin.price_change_percentage_1h_in_currency}
                  >
                    {(this.props.currency !== coin.symbol && (
                        <>
                          <Arrow content={getArrow(coin.price_change_percentage_1h_in_currency)} />
                          {Math.abs(coin.price_change_percentage_1h_in_currency.toFixed(2))}% 
                        </>
                      )) || <span>-</span>
                    }
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[4]}
                    number={coin.price_change_percentage_24h_in_currency}
                  > 
                    {(this.props.currency !== coin.symbol && (
                        <>
                          <Arrow content={getArrow(coin.price_change_percentage_24h_in_currency)} />
                          {Math.abs(coin.price_change_percentage_24h_in_currency.toFixed(2))}%
                        </>
                      )) || <span>-</span>
                    }
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[5]} 
                    number={coin.price_change_percentage_7d_in_currency}
                  >
                    {(this.props.currency !== coin.symbol && (
                        <>
                          <Arrow content={getArrow(coin.price_change_percentage_7d_in_currency)} />
                          {Math.abs(coin.price_change_percentage_7d_in_currency.toFixed(2))}%
                        </>
                      )) || <span>-</span>
                    }
                    
                    
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[6]} 
                  >
                    {prettierNumber(coin.total_volume)}
                    /
                    {prettierNumber(coin.market_cap)}
                  </Cell>
                  
                  <Cell 
                    key={keyGen()} 
                    width={this.widths[7]} 
                  >
                    {prettierNumber(coin.circulating_supply.toFixed())}
                    /
                    {(coin.total_supply && prettierNumber(coin.total_supply.toFixed())) || "Infinite"}
                  </Cell>

                  <Cell 
                    key={keyGen()} 
                    width={this.widths[8]} 
                  >
                    <CoinListChart prices={coin.sparkline_in_7d.price.filter((_, index) => index % 8 === 0)} priceChange={coin.price_change_percentage_7d_in_currency} />
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
