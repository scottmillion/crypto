import React from 'react'
import axios from 'axios'
// import LineChart from 'components/Chart'
import { prettierNumber } from 'utils/prettierNumber'


class AllCoins extends React.Component {
  state = {
    data: null
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

  render() {
    return (
      <>
      
      <h1>This is the All Coins Page</h1>
        {/* <LineChart /> */}
        <div>            
            {!this.state.data && <div>Loading Data API...</div>}
           {this.state.data && (
            <ul>
              {this.state.data.map((coin, index) => {
                return (<li key={index + coin.name}>
                  <div>{index + 1}</div>
                  <div><img src={coin.image} alt={coin.name} />{coin.name} ({coin.symbol.toUpperCase()})</div>
                  <div>${prettierNumber(coin.current_price)}</div>
                  <div>1 Hour: {coin.price_change_percentage_1h_in_currency.toFixed(2)}%</div>
                  <div>24 Hour: {coin.price_change_percentage_24h_in_currency.toFixed(2)}%</div>
                  <div>7 Day Change: {coin.price_change_percentage_7d_in_currency.toFixed(2)}%</div>
                  <div>24 Hour Volume {prettierNumber(coin.total_volume)}</div>
                  <div>Market Cap {prettierNumber(coin.market_cap)}</div>
                  <div>Circulating: {prettierNumber(coin.circulating_supply.toFixed())}</div>
                  <div>Total Supply: {(coin.total_supply && prettierNumber(coin.total_supply.toFixed())) || "Infinite"}</div>
                  <div>Last 7 Day Chart</div>
                </li>)
              })}
              
            </ul>
          )}

          
          
          
        </div>
      </>
    )
  }
}

export default AllCoins
