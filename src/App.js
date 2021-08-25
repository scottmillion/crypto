import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'App.styles'
import { ThemeProvider } from 'styled-components'
import { AllCoins, Coin } from 'pages'
import { NavBar, NavUnder } from 'parts'
import { currencyList, lightTheme, darkTheme } from 'utils'
import { Container } from 'App.css'

class App extends React.Component {
  state = {
    currency: 'usd',
    currencySymbol: '$',
    global: null,
    isLoading: false,
    on: false,
  }

  getGlobalData = async () => {
    this.setState({ isLoading: true })
    try {
      const { data } = await axios('https://api.coingecko.com/api/v3/global')
      this.setState({ global: data.data, isLoading: false })
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
    const { currency, currencySymbol, global, isLoading, on } = this.state
    const theme = on ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Container>
            <NavBar
              currency={currency}
              currencyList={currencyList}
              currencySymbol={currencySymbol}
              handleChangeCurrency={this.handleChangeCurrency}
              handleThemeButtonClick={this.handleThemeButtonClick}
              on={on}
            />
            <NavUnder
              currency={currency}
              currencySymbol={currencySymbol}
              global={global}
              isLoading={isLoading}
            />
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <AllCoins
                    currency={currency}
                    currencySymbol={currencySymbol}
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
