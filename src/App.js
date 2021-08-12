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
import search from './images/search.png';
import mode from './images/mode.png';
import { Container, CurrencyImage, CurrencySymbol, Mode, Nav, NavLeft, NavLeftUl, NavLeftLi, NavRight, NavRightInput, NavRightInputContainer, NavRightSelectContainer, NavUnder, NavUnderContainer, NavUnderUl, NavUnderLi, Select, SelectArrow} from 'App.css'

class App extends React.Component {
  state = {
    global: null,
    currency: 'usd',
    currencySymbol: "$",
    value: ''
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

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({value});
    
  }

  handleChangeCurrency = (e) => {
    const currency = e.target.value
    const currencySymbol = this.currencyList[currency].symbol;
    this.setState({currency, currencySymbol})
  }

  

  currencyList = {
    "usd": {
      name: "USD",
      symbol: "$"
    },
    "gbp": {
      name: "GBP",
      symbol: "£"
    },
    "eur": {
      name: "EUR",
      symbol: "€"
    },
    "btc": {
      name: "BTC",
      symbol: "₿"
    },
    "eth": {
      name: "ETH",
      symbol: "Ξ"
    }
  } 

  render(){
  return (
    <Router>
       <GlobalStyle />
      <Container>
        <Nav>
        <NavLeft>
          <NavLeftUl>
            <NavLeftLi background={"#2C2F36"} key={"first-li"}>
              <Link to="/" style={{ textDecoration: 'none', color: "white" }}>Coins</Link>
            </NavLeftLi>
            <NavLeftLi key={"second-li"}>
              <Link to="/" style={{ textDecoration: 'none', color: "white" }}>Portfolio</Link>
            </NavLeftLi>
          </NavLeftUl>
          </NavLeft>
          <NavRight>
            <NavRightInputContainer>
              <CurrencyImage src={search} alt="search"/>
              <NavRightInput type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." />
            </NavRightInputContainer>
            <NavRightSelectContainer>
              <CurrencySymbol>{this.state.currencySymbol}</CurrencySymbol>
              <Select name="currency" id="current-currency" onChange={this.handleChangeCurrency}>
                {Object.keys(this.currencyList).map((currency) => {
                  return <option value={currency} key={currency + "uniq"}>{this.currencyList[currency].name}</option>
                })
                }
              </Select>
              <SelectArrow>⏷</SelectArrow>
            </NavRightSelectContainer>
            <Mode><img src={mode} alt="mode"/></Mode>           
          </NavRight>
        </Nav>

        <NavUnderContainer>
          <NavUnder>
            {!this.state.global && <div>Loading Global API...</div>}
            {this.state.global && <div>
              <NavUnderUl>
                <NavUnderLi>Coins {this.state.global.active_cryptocurrencies}</NavUnderLi>
                <NavUnderLi>Exchange {this.state.global.markets}</NavUnderLi>
                <NavUnderLi>• ${prettierNumber(Math.round(this.state.global.total_market_cap[this.state.currency]))}</NavUnderLi>
                <NavUnderLi>• ${prettierNumber(Math.round(this.state.global.total_volume[this.state.currency]))}</NavUnderLi>
                <NavUnderLi>{Math.round(this.state.global.market_cap_percentage.btc)}%</NavUnderLi>
                <NavUnderLi>{Math.round(this.state.global.market_cap_percentage.eth)}%</NavUnderLi>
              </NavUnderUl>
            </div>}
          </NavUnder>
        </NavUnderContainer>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={() => <AllCoins currency={this.state.currency} symbol={this.state.currencySymbol}/>} />
          <Route exact path="/coin/:name" component={Coin} />
        </Switch>
      </Container>
    </Router>
  );}
}



export default App;
