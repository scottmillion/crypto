import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCoins from "pages/AllCoins"
import Coin from "pages/Coin"
import axios from 'axios'
import { GlobalStyle } from "App.styles";


class App extends React.Component {
  state = {
    global: null
  }

  getGlobalData = async () => {
    try {
      const { data } = await axios('https://api.coingecko.com/api/v3/global')
      this.setState({ global: data.data })
    } catch(error) {
      console.log("Global API Error!")
      console.log(error);
    }
  }

  componentDidMount() {
    this.getGlobalData();

  }



  render(){
  return (
    <Router>
       <GlobalStyle />
      <div className="container">
        <nav>
        <div className="nav-left">
          <ul>
            <li>
              <Link to="/">Coins</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
          </ul>
          </div>
          <div className="nav-right">
            <div>
            <input type="text" value="Search..."/>
            <img/>
            </div>
            <div className="nav-right-select-container">
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <button>D/L</button>
            
          </div>
        </nav>
        <div>
        {!this.state.global && <div>Loading Global API...</div>}
          {this.state.global && <div>
            <h1>Nav</h1>
            <ul>
              <li> Coins: {this.state.global.active_cryptocurrencies}</li>
              <li> Exchange: {this.state.global.markets}</li>
              <li> Total Market Cap: {Math.round(this.state.global.total_market_cap.usd)}</li>
              <li> Total Volume: {Math.round(this.state.global.total_volume.usd)}</li>
              <li> BTC Market Cap %: {Math.round(this.state.global.market_cap_percentage.btc)}%</li>
              <li> Eth Market Cap %: {Math.round(this.state.global.market_cap_percentage.eth)}%</li>
            </ul>
            
            
            <hr/>
            </div>}
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={AllCoins} />
          <Route exact path="/coin/:name" component={Coin} />
        </Switch>
      </div>
    </Router>
  );}
}



export default App;
