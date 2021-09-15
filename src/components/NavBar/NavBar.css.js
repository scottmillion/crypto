import styled from 'styled-components'
import { DownArrow } from '@styled-icons/boxicons-solid'
import { Link } from 'react-router-dom'

export const CurrencySymbol = styled.div`
  width: 2.6rem;
  height: 30px;
  font-size: 1.2rem;
  background: #191b1f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #00ff5f;
`

export const Nav = styled.div`
  width: 90%;
  background: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: space-between;
`

export const NavWrap = styled.div`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: center;
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
  padding-block: 12px;
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
`

export const NavRightInputContainer = styled.div``

export const NavRightSelectContainer = styled.div`
  position: relative;
  margin-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  width: 106px;
  /* height: 35px; */
  border-radius: 10px;
  background: ${(props) => props.theme.tertiary};
  padding: 10px 10px;
  font-size: 1rem;
`

export const SearchImage = styled.img`
  width: 20px;
  position: absolute;
  margin: 15px 22px 0px 28px;
`

export const Select = styled.select`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  width: 65px;
  border: none;
  background: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.mainFont};
  font-size: 1.1rem;
  margin-left: 3px;

  &:focus {
    outline: none;
  }
`

export const SelectArrow = styled(DownArrow)`
  position: absolute;
  margin-left: 32px;
  margin-top: 10px;
  color: #00ff5f;
  pointer-events: none;
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

export const ThemeMode = styled.div`
  display: flex;
  border-radius: 10px;
  background: ${(props) => props.theme.tertiary};
  padding: 8px 14px;
  margin-left: 20px;
  font-size: 1.1rem;
`
