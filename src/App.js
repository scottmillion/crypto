import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllCoins from 'pages/AllCoins'
import axios from 'axios'
import Coin from 'pages/Coin'
import { GlobalStyle } from 'App.styles'
import { ThemeProvider } from 'styled-components'
import { Container } from 'App.css'
import { NavBar } from 'parts/NavBar'
import { NavUnder } from 'parts/NavUnder'
import { currencyList, lightTheme, darkTheme } from 'utils/constants'

class App extends React.Component {
  state = {
    on: false,
    global: null,
    currency: 'usd',
    currencySymbol: '$',
  }

  getGlobalData = async () => {
    try {
      const { data } = await axios('https://api.coingecko.com/api/v3/global')
      this.setState({ global: data.data })
    } catch (error) {
      console.log('Global API Error!')
      console.log(error)
    }
  }

  handleChangeCurrency = (e) => {
    const currency = e.target.value
    const currencySymbol = currencyList[currency].symbol
    this.setState({ currency, currencySymbol })
  }

  handleThemeButtonClick = () => {
    const value = !this.state.on
    this.setState({ on: value })
  }

  componentDidMount() {
    this.getGlobalData()
  }

  render() {
    const { global, currency, currencySymbol } = this.state
    const theme = this.state.on ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle theme={theme} />
          <Container theme={theme}>
            <NavBar
              theme={theme}
              currencySymbol={currencySymbol}
              currency={currency}
              handleChangeCurrency={this.handleChangeCurrency}
              currencyList={currencyList}
              handleThemeButtonClick={this.handleThemeButtonClick}
            />
            <NavUnder
              theme={theme}
              global={global}
              currency={currency}
              currencySymbol={currencySymbol}
            />
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <AllCoins
                    currency={currency}
                    currencySymbol={currencySymbol}
                    theme={theme}
                  />
                )}
              />
              <Route exact path="/coin/:name" component={Coin} />
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
