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
  NavWrap,
  SearchImage,
  Select,
  SelectArrow,
  SelectWrap,
  StyledLink,
  ThemeMode,
} from './NavBar.css'
import styled from 'styled-components'
import Media from 'react-media'
import { screenSizeWidth } from 'utils'

const NavBar = (props) => {
  const currentLocation = useLocation().pathname
  return (
    <NavWrap>
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
          <Media
            queries={{
              desktop: screenSizeWidth.desktopSM,
            }}
          >
            {(matches) => (
              <>
                {matches.desktop && (
                  <NavRightInputContainer>
                    <SearchImage
                      src={
                        props.on ? Images.searchIconLight : Images.searchIcon
                      }
                      alt="search"
                    />
                    <Search />
                  </NavRightInputContainer>
                )}
              </>
            )}
          </Media>

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
              <SelectArrow size=".6rem" />
            </SelectWrap>
          </NavRightSelectContainer>
          <Media
            queries={{
              desktop: screenSizeWidth.desktopM,
            }}
          >
            {(matches) => (
              <>
                {matches.desktop && (
                  <ThemeMode>
                    <img
                      src={props.on ? Images.themeIconLight : Images.themeIcon}
                      alt="mode"
                      onClick={props.handleThemeButtonClick}
                    />
                  </ThemeMode>
                )}
              </>
            )}
          </Media>
        </NavRight>
      </Nav>
    </NavWrap>
  )
}

export default NavBar
