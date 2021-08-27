import styled from 'styled-components'
import { DownArrow } from '@styled-icons/boxicons-solid'

export const CurrencySymbol = styled.div`
  width: 3rem;
  height: 33px;
  font-size: 1.3rem;
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
  height: 97px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: center;
`

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`

export const NavLeftLi = styled.li`
  font-size: 1.3rem;
  display: inline-block;
  width: 167px;
  border-radius: 20px;
  text-align: center;
  padding-top: 13px;
  padding-bottom: 13px;
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
  margin-left: 28px;
  display: flex;
  flex-wrap: nowrap;
  width: 115px;
  height: 35px;
  border-radius: 20px;
  background: ${(props) => props.theme.tertiary};
  padding: 14px 10px;
  font-size: 1.1rem;
`

export const SearchImage = styled.img`
  position: absolute;
  margin: 20px 22px 0px 28px;
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
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`

export const SelectArrow = styled(DownArrow)`
  position: absolute;
  margin-left: 32px;
  margin-top: 12px;
  color: #00ff5f;
  pointer-events: none;
`

export const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ThemeMode = styled.div`
  display: flex;
  height: 35px;
  border-radius: 20px;
  background: ${(props) => props.theme.tertiary};
  padding: 14px 21px;
  margin-left: 28px;
  font-size: 1.1rem;
`
