import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'App.styles'
import { ThemeProvider } from 'styled-components'
import { AllCoins, Coin, Portfolio } from 'pages'
import { NavBar, NavUnder } from 'components'
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

  handleChangeCurrency = (e) => {
    const currency = e.target.value
    const currencySymbol = currencyList[currency].symbol
    this.setState({ currency, currencySymbol })
  }

  handleThemeButtonClick = () => {
    const value = !this.state.on
    this.setState({ on: value })
  }

  render() {
    const { currency, currencySymbol, on } = this.state
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
            <NavUnder currency={currency} currencySymbol={currencySymbol} />
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
              <Route
                exact
                path="/portfolio"
                component={() => <Portfolio currency={currency} />}
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
