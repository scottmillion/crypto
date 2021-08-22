import { BrowserRouter as Link } from 'react-router-dom'
import {
  CurrencySymbol,
  Nav,
  NavLeft,
  NavLeftUl,
  NavLeftLi,
  NavRight,
  NavRightInputContainer,
  NavRightSelectContainer,
  SearchImage,
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

import { useLocation } from 'react-router-dom'

export const NavBar = (props) => {
  const currentLocation = useLocation().pathname
  return (
    <Nav theme={props.theme}>
      <NavLeft>
        <NavLeftUl>
          <NavLeftLi routeMatches={currentLocation === '/'} key={keyGen()}>
            <Link
              to="/"
              style={{ textDecoration: 'none', color: props.theme.mainFont }}
            >
              Coins
            </Link>
          </NavLeftLi>
          <NavLeftLi
            routeMatches={currentLocation === '/portfolio'}
            key={keyGen()}
          >
            <Link
              to="/portfolio"
              style={{ textDecoration: 'none', color: props.theme.mainFont }}
            >
              Portfolio
            </Link>
          </NavLeftLi>
        </NavLeftUl>
      </NavLeft>
      <NavRight>
        <NavRightInputContainer theme={props.theme}>
          <SearchImage
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
}
