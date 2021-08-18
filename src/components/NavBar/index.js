import { BrowserRouter as Link } from 'react-router-dom'
import { keyGen } from 'utils/keyGen'
import {
  CurrencyImage,
  CurrencySymbol,
  Mode,
  Nav,
  NavLeft,
  NavLeftUl,
  NavLeftLi,
  NavRight,
  NavRightInputContainer,
  NavRightSelectContainer,
  Select,
  SelectArrow,
  SelectWrap,
} from './NavBar.css'

import mode from 'images/mode.png'
import search from 'images/search.png'
import Search from 'components/Search'

export const NavBar = (props) => (
  <Nav theme={props.theme}>
    <NavLeft>
      <NavLeftUl>
        <NavLeftLi background={'#2C2F36'} key={keyGen()}>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: props.theme.mainFont }}
          >
            Coins
          </Link>
        </NavLeftLi>
        <NavLeftLi key={keyGen()}>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: props.theme.mainFont }}
          >
            Portfolio
          </Link>
        </NavLeftLi>
      </NavLeftUl>
    </NavLeft>
    <NavRight>
      <NavRightInputContainer theme={props.theme}>
        <CurrencyImage src={search} alt="search" />
        <Search />
      </NavRightInputContainer>
      <NavRightSelectContainer theme={props.theme}>
        <CurrencySymbol>{props.currencySymbol}</CurrencySymbol>
        <SelectWrap>
          <Select
            name="currency"
            id="current-currency"
            value={props.currency}
            onChange={props.handleChangeCurrency}
            theme={props.theme}
          >
            {Object.keys(props.currencyList).map((currency) => {
              return (
                <option value={currency} key={keyGen()}>
                  {props.currencyList[currency].name}
                </option>
              )
            })}
          </Select>
          <SelectArrow>&#9207;</SelectArrow>
        </SelectWrap>
      </NavRightSelectContainer>
      <Mode theme={props.theme}>
        <img src={mode} alt="mode" onClick={props.handleThemeButtonClick} />
      </Mode>
    </NavRight>
  </Nav>
)
