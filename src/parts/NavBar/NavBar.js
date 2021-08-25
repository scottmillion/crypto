import { BrowserRouter as Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { NavBarImages as Images } from 'assets/Images'
import { Search } from 'parts'
import { keyGen } from 'utils'
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
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: 'none';
  color: ${(props) => props.theme.mainFont};
`

const NavBar = (props) => {
  const currentLocation = useLocation().pathname
  return (
    <Nav>
      <NavLeft>
        <NavLeftUl>
          <NavLeftLi routeMatches={currentLocation === '/'} key={keyGen()}>
            <StyledLink to="/">Coins</StyledLink>
          </NavLeftLi>
          <NavLeftLi
            routeMatches={currentLocation === '/portfolio'}
            key={keyGen()}
          >
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </NavLeftLi>
        </NavLeftUl>
      </NavLeft>
      <NavRight>
        <NavRightInputContainer>
          <SearchImage
            src={props.on ? Images.searchIconLight : Images.searchIcon}
            alt="search"
          />
          <Search />
        </NavRightInputContainer>
        <NavRightSelectContainer>
          <CurrencySymbol>{props.currencySymbol}</CurrencySymbol>
          <SelectWrap>
            <Select
              name="currency"
              id="current-currency"
              value={props.currency}
              onChange={props.handleChangeCurrency}
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
        <ThemeMode>
          <img
            src={props.on ? Images.themeIconLight : Images.themeIcon}
            alt="mode"
            onClick={props.handleThemeButtonClick}
          />
        </ThemeMode>
      </NavRight>
    </Nav>
  )
}

export default NavBar
