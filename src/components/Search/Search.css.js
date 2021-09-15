import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'
import { screenSizeWidth } from 'utils'

export const Input = styled(DebounceInput)`
  background: ${(props) => props.theme.tertiary};
  color: inherit;
  font-size: 1.1rem;
  width: 250px;
  height: 48px;
  padding-left: 56px;
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: inherit;
    font-size: 1.1rem;
  }
  &:focus {
    outline: none;
  }

  @media ${screenSizeWidth.desktopM} {
    width: 350px;
  }
`

export const SearchList = styled.div`
  position: absolute;
  background: ${(props) => props.theme.tertiary};
  color: inherit;
  padding: 0px 20px 0px 20px;
  margin-left: 42px;
  font-size: 1rem;
  z-index: 10000000;
`

export const SearchListItem = styled.div`
  padding: 2px 0px;
  z-index: Infinity;
  &:hover {
    background: ${(props) => props.theme.primary};
  }
`
