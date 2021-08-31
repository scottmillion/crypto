import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GlobalStyle } from 'App.styles'
import { ThemeProvider } from 'styled-components'
import { AllCoins, Coin, Portfolio } from 'pages'
import { NavBar, NavUnder } from 'components'
import { lightTheme, darkTheme } from 'utils'
import { Container } from 'App.css'

const App = () => {
  const themeOn = useSelector((state) => state.config.themeOn)
  const theme = themeOn ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Container>
          <NavBar />
          <NavUnder />
          <Switch>
            <Route exact path="/" component={() => <AllCoins />} />
            <Route exact path="/portfolio" component={() => <Portfolio />} />
            <Route exact path="/coin/:name" component={() => <Coin />} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
