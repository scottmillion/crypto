import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'App.styles'
import { ThemeProvider } from 'styled-components'
import { AllCoins, Coin, Portfolio } from 'pages'
import { NavBar, NavUnder } from 'components'
import { currencyList, lightTheme, darkTheme } from 'utils'
import { Container } from 'App.css'

const App = () => {
  const [currency, setCurrency] = useState('usd')
  const [currencySymbol, setCurrencySymbol] = useState('$')
  const [on, setOn] = useState(false)

  const handleChangeCurrency = (e) => {
    const { value } = e.target
    setCurrency(value)
    setCurrencySymbol(currencyList[value].symbol)
  }

  const handleThemeButtonClick = () => {
    setOn(!on)
  }

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
            handleChangeCurrency={handleChangeCurrency}
            handleThemeButtonClick={handleThemeButtonClick}
            on={on}
          />
          <NavUnder currency={currency} currencySymbol={currencySymbol} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <AllCoins currency={currency} currencySymbol={currencySymbol} />
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

export default App
