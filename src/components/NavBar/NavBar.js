import { useLocation } from 'react-router-dom'
import { NavBarImages as Images } from 'assets/Images'
import { Search } from 'components'
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
import Media from 'react-media'
import { currencyList, screenSizeWidth } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrency, toggleTheme } from 'store/config/actions.js'

const NavBar = () => {
  const currentLocation = useLocation().pathname
  const { currency, currencySymbol, themeOn } = useSelector(
    (state) => state.config,
  )
  const dispatch = useDispatch()

  const handleChangeCurrency = (e) => {
    const { value } = e.target
    dispatch(changeCurrency(value))
  }

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
                      src={themeOn ? Images.searchIconLight : Images.searchIcon}
                      alt="search"
                    />
                    <Search />
                  </NavRightInputContainer>
                )}
              </>
            )}
          </Media>

          <NavRightSelectContainer>
            <CurrencySymbol>{currencySymbol}</CurrencySymbol>
            <SelectWrap>
              <Select
                name="currency"
                id="current-currency"
                value={currency}
                onChange={handleChangeCurrency}
              >
                {Object.keys(currencyList).map((currencyType) => {
                  return (
                    <option value={currencyType} key={keyGen()}>
                      {currencyList[currencyType].name}
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
                      src={themeOn ? Images.themeIconLight : Images.themeIcon}
                      alt="mode"
                      onClick={() => dispatch(toggleTheme())}
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
