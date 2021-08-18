import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCoins from "pages/AllCoins";
import axios from 'axios';
import Coin from "pages/Coin";
import mode from './images/mode.png';
import search from './images/search.png';
import Search from "components/Search";
import { keyGen } from "utils/keyGen";
import { GlobalStyle } from "App.styles";
import { prettierNumber } from "utils/prettierNumber";
import { ThemeProvider } from "styled-components";
import { Circle, Container, CurrencyImage, CurrencySymbol, Mode, Nav, NavBulletPoint, NavLeft, NavLeftUl, NavLeftLi, NavRight, NavRightInputContainer, NavRightSelectContainer, NavUnder, NavUnderContainer, NavUnderImg, NavUnderUl, NavUnderLi, PercentDisplay, Select, SelectArrow, SelectWrap} from 'App.css';

const lightTheme = {
  mainFont: "#000",
  primary: "#f7f7f7",
  secondary: "#FFF",
  tertiary: "#edeff2"
}

const darkTheme = {
  mainFont: "#FFF",
  primary: "#1F2128", 
  secondary: "#191B1F", // darkest
  tertiary: "#2C2F36" 
  
}

const currencyList = {
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

class App extends React.Component {
  state = {
    on: false,
    global: null,
    currency: 'usd',
    currencySymbol: "$"
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

  handleChangeCurrency = (e) => {
    const currency = e.target.value
    const currencySymbol = currencyList[currency].symbol;
    this.setState({currency, currencySymbol})
  }

  handleThemeButtonClick = () => {
    const value = !this.state.on;
    this.setState({on: value})
  }

  

  

  render(){
    const { global, currency, currencySymbol } = this.state;
    const theme = this.state.on ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle theme={theme} />
        <Container theme={theme}>
          <Nav theme={theme}>
            <NavLeft>
              <NavLeftUl>
                <NavLeftLi background={"#2C2F36"} key={keyGen()}>
                  <Link to="/" style={{ textDecoration: 'none', color: theme.mainFont }}>Coins</Link>
                </NavLeftLi>
                <NavLeftLi key={keyGen()}>
                  <Link to="/" style={{ textDecoration: 'none', color: theme.mainFont }}>Portfolio</Link>
                </NavLeftLi>
              </NavLeftUl>
            </NavLeft>
            <NavRight>
              <NavRightInputContainer theme={theme}>
                <CurrencyImage src={search} alt="search"/>
                <Search />
              </NavRightInputContainer>
              <NavRightSelectContainer theme={theme}>
                <CurrencySymbol>{currencySymbol}</CurrencySymbol>
                <SelectWrap>
                  <Select name="currency" id="current-currency" value={currency} onChange={this.handleChangeCurrency} theme={theme}>
                    {Object.keys(currencyList).map((currency) => {
                      return <option value={currency} key={keyGen()}>{currencyList[currency].name}</option>
                    })
                    }
                  </Select>
                <SelectArrow>&#9207;</SelectArrow>
                </SelectWrap>
              </NavRightSelectContainer>
              <Mode theme={theme}><img src={mode} alt="mode" onClick={this.handleThemeButtonClick}/></Mode>           
            </NavRight>
          </Nav>

          <NavUnderContainer>
            <NavUnder theme={theme}>
              {!global && <div>Loading Global API...</div>}
              {global && <div>
                <NavUnderUl>
                  <NavUnderLi>Coins {global.active_cryptocurrencies}</NavUnderLi>
                  <NavUnderLi>Exchange {global.markets}</NavUnderLi>
                  <NavUnderLi><NavBulletPoint>&#8226;</NavBulletPoint>{currencySymbol}{prettierNumber(Math.round(global.total_market_cap[currency]))}</NavUnderLi>
                  <NavUnderLi>
                  <NavBulletPoint>&#8226;</NavBulletPoint>{currencySymbol}{prettierNumber(Math.round(global.total_volume[currency]))}
                    <PercentDisplay percent={Math.round(global.total_volume[currency] / global.total_market_cap[currency])}>
                      <Circle percent={Math.round(global.total_volume[currency] / global.total_market_cap[currency])} />
                    </PercentDisplay>
                  </NavUnderLi>
                  <NavUnderLi>
                    <NavUnderImg marginRight="1">
                      <img src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579" alt="btc thumb"/>
                    </NavUnderImg>
                    {Math.round(global.market_cap_percentage.btc)}%
                    <PercentDisplay percent={Math.round(global.market_cap_percentage.btc)}>
                      <Circle percent={Math.round(global.market_cap_percentage.btc)}/>
                    </PercentDisplay>
                  </NavUnderLi>
                  <NavUnderLi>
                    <NavUnderImg marginRight="-4">
                      <img src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" alt="eth thumb"/>
                    </NavUnderImg>
                    {Math.round(global.market_cap_percentage.eth)}%
                    <PercentDisplay percent={Math.round(global.market_cap_percentage.eth)}>
                      <Circle percent={Math.round(global.market_cap_percentage.eth)}/>
                    </PercentDisplay>
                  </NavUnderLi>
                </NavUnderUl>
              </div>}
            </NavUnder>
          </NavUnderContainer>
          
          <Switch>
            <Route exact path="/" component={() => <AllCoins currency={currency} currencySymbol={currencySymbol} theme={theme}/>} />
            <Route exact path="/coin/:name" component={Coin} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
    )}
}



export default App;
