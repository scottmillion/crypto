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
import { prettierNumber } from "utils/prettierNumber";


class App extends React.Component {
  state = {
    global: null,
    currency: 'usd'
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

  handleChange() {
    
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
            <input type="text" value="Search..." onChange={this.handleChange}/>
            <img src="" alt=""/>
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
        <div className="nav-under-container">
        <div className="nav-under">
        {!this.state.global && <div>Loading Global API...</div>}
          {this.state.global && <div>
            <ul>
              <li>Coins {this.state.global.active_cryptocurrencies}</li>
              <li>Exchange {this.state.global.markets}</li>
              <li>• ${prettierNumber(Math.round(this.state.global.total_market_cap[this.state.currency]))}</li>
              <li>• ${prettierNumber(Math.round(this.state.global.total_volume[this.state.currency]))}</li>
              <li>{Math.round(this.state.global.market_cap_percentage.btc)}%</li>
              <li>{Math.round(this.state.global.market_cap_percentage.eth)}%</li>
            </ul>
            
            
            
            </div>}
            </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={() => <AllCoins currency={this.state.currency}/>} />
          <Route exact path="/coin/:name" component={Coin} />
        </Switch>
      </div>
    </Router>
  );}
}



export default App;
