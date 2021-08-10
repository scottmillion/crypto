import React from 'react'
import axios from 'axios'
import {calculatePercentChange} from 'utils/calculatePercentChange'
import LineChart from 'components/Chart'


class AllCoins extends React.Component {
  state = {
    profileDataLoaded: false,
    marketChartDataLoaded: false,
    coins: {
      "bitcoin": {},
      "ethereum": {},
      "tether": {},
      "dogecoin": {},
      "binancecoin": {},
      "cardano": {},
      "usd-coin": {},
      "wrapped-bitcoin": {}, 
      "litecoin": {}
    }
        
  }

  getProfileData = async (coinIds) => {
    let counter = 0;
    for (let id of coinIds) {
      try {
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
        const tempCoins = {...this.state.coins};
        tempCoins.[id].profile = data;
        this.setState({coins: tempCoins });
        counter++
      } catch(error) {
        console.log("Error in Profile Data API!");
        console.log(error);
      }
    }
    if (counter === Object.keys(this.state.coins).length) { this.setState({profileDataLoaded: true }) }
  }

  getMarketChartData = async (coinIds) => {
    let counter = 0;
    for (let id of coinIds) {
      try {
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`);

        const hourlyData = await axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=hourly`);

        let tempCoins = {...this.state.coins};
        tempCoins.[id].chart = { daily: data, hourly: hourlyData.data};
        this.setState({coins: tempCoins });
        counter++
      } catch(error) {
        console.log("Error in Coin Id API!");
        console.log(error);
      }
    }
    if (counter === Object.keys(this.state.coins).length) { this.setState({marketChartDataLoaded: true }) }
  }


  componentDidMount() {
    this.getMarketChartData(Object.keys(this.state.coins));
    this.getProfileData(Object.keys(this.state.coins));
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <>
      <h1>This is the All Coins Page</h1>
        {/* <LineChart /> */}
        <div>            
            {!this.state.profileDataLoaded && <div>Loading Profile API...</div>}
            {!this.state.marketChartDataLoaded && <div>Loading Market Chart API...</div>}
           {this.state.profileDataLoaded && this.state.marketChartDataLoaded && (
            <ul>
              {Object.keys(this.state.coins).map((key, index) => {
                const profile = this.state.coins[key].profile;
                const chart = this.state.coins[key].chart;
                console.log(chart);
                console.log(this.state);
                return (<li key={index + profile.name}>
                  <div>{index + 1}</div>
                  <div><img src={profile.image.thumb} alt={profile.name} />{profile.name} ({profile.symbol.toUpperCase()})</div>
                  <div>${profile.market_data.current_price.usd}</div>
                  <div>1 Hour: {calculatePercentChange(chart.hourly.prices[chart.hourly.prices.length - 1][1], chart.hourly.prices[chart.hourly.prices.length - 2][1])}</div>

                  <div>24 Hour: {calculatePercentChange(chart.hourly.prices[chart.hourly.prices.length - 1][1], chart.hourly.prices[0][1])}</div>
                 
                  <div>7 Day Change: {calculatePercentChange(chart.daily.prices[chart.daily.prices.length - 1][1], chart.daily.prices[0][1])}%</div>

                  <div>24 Hour Volume {chart.daily.total_volumes[chart.daily.total_volumes.length - 1][1]}</div>
                  <div>Market Cap {chart.daily.market_caps[chart.daily.market_caps.length - 1][1]}</div>
                  <div>Circulating: {profile.market_data.circulating_supply}</div>
                  <div>Total Supply: {profile.market_data.total_supply}</div>
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
