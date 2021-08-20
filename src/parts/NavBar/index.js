import { BrowserRouter as Link } from 'react-router-dom'
import {
  CurrencyImage,
  CurrencySymbol,
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
  ThemeMode,
} from './NavBar.css'

import { keyGen } from 'utils/keyGen'
import searchIcon from 'assets/images/search-icon.png'
import searchIconLight from 'assets/images/search-icon-light.png'
import themeIcon from 'assets/images/theme-icon.png'
import themeIconLight from 'assets/images/theme-icon-light.png'
import Search from 'parts/Search'

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
        <CurrencyImage
          src={props.on ? searchIconLight : searchIcon}
          alt="search"
        />
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
      <ThemeMode theme={props.theme}>
        <img
          src={props.on ? themeIconLight : themeIcon}
          alt="mode"
          onClick={props.handleThemeButtonClick}
        />
      </ThemeMode>
    </NavRight>
  </Nav>
)
