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
    const { global, currency, currencySymbol, on } = this.state
    const theme = on ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle theme={theme} />
          <Container theme={theme}>
            <NavBar
              currency={currency}
              currencyList={currencyList}
              currencySymbol={currencySymbol}
              handleChangeCurrency={this.handleChangeCurrency}
              handleThemeButtonClick={this.handleThemeButtonClick}
              on={on}
              theme={theme}
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
