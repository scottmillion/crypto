import { useLocation } from 'react-router-dom'
import { NavBarImages as Images } from 'assets/Images'
import { Search } from 'components'
import { keyGen } from 'utils'
import {
  CurrencySymbol,
  DisplayMenu,
  Hr,
  MobileMenu,
  MobileMenuIcon,
  MobileMenuItem,
  MobileMenuLink,
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
import {
  changeCurrency,
  toggleMenu,
  toggleTheme,
} from 'store/config/actions.js'

const NavBar = () => {
  const currentLocation = useLocation().pathname
  const { currency, currencySymbol, displayMenu, themeOn } = useSelector(
    (state) => state.config,
  )
  const dispatch = useDispatch()

  const handleChangeCurrency = (e) => {
    const { value } = e.target
    dispatch(changeCurrency(value))
  }

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <NavWrap>
      <Nav>
        <Media
          queries={{
            desktopSM: screenSizeWidth.desktopSM,
            desktopM: screenSizeWidth.desktopM,
            tablet: screenSizeWidth.tablet,
            tabletS: screenSizeWidth.tabletS,
          }}
        >
          {(matches) => (
            <>
              {matches.tablet && (
                <NavLeft>
                  <NavLeftUl>
                    <NavLeftLi routeMatches={currentLocation === '/'}>
                      <StyledLink to="/">Coins</StyledLink>
                    </NavLeftLi>
                    <NavLeftLi routeMatches={currentLocation === '/portfolio'}>
                      <StyledLink to="/portfolio">Portfolio</StyledLink>
                    </NavLeftLi>
                  </NavLeftUl>
                </NavLeft>
              )}

              <NavRight>
                <NavRightInputContainer>
                  <SearchImage
                    src={themeOn ? Images.searchIconLight : Images.searchIcon}
                    alt="search"
                  />
                  <Search />
                </NavRightInputContainer>

                <NavRightSelectContainer>
                  {matches.desktopSM && (
                    <CurrencySymbol>{currencySymbol}</CurrencySymbol>
                  )}
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

                {matches.tablet && (
                  <ThemeMode>
                    <img
                      src={themeOn ? Images.themeIconLight : Images.themeIcon}
                      alt="mode"
                      onClick={() => dispatch(toggleTheme())}
                    />
                  </ThemeMode>
                )}
              </NavRight>
              {matches.tabletS && (
                <MobileMenu>
                  <MobileMenuIcon onClick={handleToggleMenu}></MobileMenuIcon>
                  {displayMenu && (
                    <DisplayMenu>
                      <MobileMenuItem
                        routeMatches={currentLocation === '/'}
                        onClick={handleToggleMenu}
                      >
                        <MobileMenuLink to="/">Coins</MobileMenuLink>
                      </MobileMenuItem>
                      <MobileMenuItem
                        routeMatches={currentLocation === '/portfolio'}
                        onClick={handleToggleMenu}
                      >
                        <MobileMenuLink to="/portfolio">
                          Portfolio
                        </MobileMenuLink>
                      </MobileMenuItem>
                      <Hr />
                      <MobileMenuItem onClick={handleToggleMenu}>
                        <div
                          width="20px"
                          onClick={() => dispatch(toggleTheme())}
                        >
                          Theme
                        </div>
                      </MobileMenuItem>
                    </DisplayMenu>
                  )}
                </MobileMenu>
              )}
            </>
          )}
        </Media>
      </Nav>
    </NavWrap>
  )
}

export default NavBar
