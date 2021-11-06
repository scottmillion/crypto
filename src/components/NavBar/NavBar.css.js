import styled from 'styled-components'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { DownArrow } from '@styled-icons/boxicons-solid'
import { Link } from 'react-router-dom'

import { DarkTheme } from '@styled-icons/fluentui-system-regular/DarkTheme'

export const CurrencySymbol = styled.div`
  width: 36px;
  background: #191b1f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #00ff5f;
`
export const Hr = styled.hr`
  margin-top: 4px;
`

export const DisplayMenu = styled.div`
  position: absolute;
  margin-top: 5px;
  right: 0;
  color: inherit;
  z-index: 1000000000000000000;
  background: ${(props) => props.theme.tertiary};
  padding: 4px 10px 4px 20px;
  font-size: 14px;
`

export const MobileMenu = styled.div`
  position: relative;
  width: 28px;
  padding: 8px 0px;
`

export const MobileMenuItem = styled.div`
  padding-block: 6px;
  z-index: Infinity;
  width: 100%;
  text-align: right;
  &:hover {
    background: ${(props) => props.theme.primary};
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

export const MobileMenuLink = styled(Link)`
  color: ${(props) => props.theme.mainFont};
  text-decoration: none;
`

export const MobileMenuIcon = styled(Menu)``

export const Nav = styled.div`
  width: 90%;
  margin: auto;
  background: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: space-between;
`

export const NavWrap = styled.div`
  width: 100%;
  padding-block: 4px;
  background: ${(props) => props.theme.secondary};

  @media (min-width: 768px) {
    padding-block: 10px;
  }
`

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`

export const NavLeftLi = styled.li`
  display: inline-block;
  width: 120px;
  border-radius: 10px;
  text-align: center;
  padding-block: 10px;
  background: ${(props) => (props.routeMatches ? props.theme.tertiary : '')};
`

export const NavLeftUl = styled.ul`
  list-style: none;
  padding: 0;
`

export const NavRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
  }
`

export const NavRightInputContainer = styled.div``

export const NavRightSelectContainer = styled.div`
  position: relative;
  margin-left: 10px;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 10px;
  background: ${(props) => props.theme.tertiary};
  padding: 10px 2px 9px 10px;
  font-size: 1rem;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`

export const SearchImage = styled.img`
  position: absolute;
  margin: 12px 0px 0px 14px;
  width: 16px;

  @media (min-width: 768px) {
    margin: 15px 0px 0px 28px;
    width: 20px;
  }
`

export const Select = styled.select`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  width: 58px;
  border: none;
  background: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.mainFont};
  font-size: 1.1rem;
  margin-left: 3px;
  padding-block: 4px;

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    padding-block: 2px;
    font-size: 14px;
    margin-left: 0px;
    width: 48px;
  }
`

export const SelectArrow = styled(DownArrow)`
  position: absolute;
  margin-left: 37px;
  margin-top: 10px;
  color: #00ff5f;
  pointer-events: none;

  @media (max-width: 767px) {
    margin-top: 6px;
    margin-left: 26px;
  }
`

export const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.mainFont};
  text-decoration: none;
`

export const ThemeIcon = styled(DarkTheme)`
  width: 26px;
`

export const ThemeMode = styled.div`
  display: flex;
  border-radius: 10px;
  background: ${(props) => props.theme.tertiary};
  padding: 10px 10px;
  margin-left: 20px;
`
