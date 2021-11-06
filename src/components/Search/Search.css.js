import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'
import { screenSizeWidth } from 'utils'

export const Input = styled(DebounceInput)`
  background: ${(props) => props.theme.tertiary};
  color: inherit;
  width: 140px;
  border: none;
  border-radius: 10px;
  padding-left: 36px;
  padding-top: 13px;
  padding-bottom: 11px;
  &::placeholder {
    color: inherit;
    font-size: 14px;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 330px) {
    width: 175px;
  }

  @media (min-width: 768px) {
    padding-left: 56px;
    padding-top: 15px;
    padding-bottom: 12px;
    font-size: 1.1rem;
    &::placeholder {
      font-size: 1.1rem;
    }
  }

  @media ${screenSizeWidth.mobileL} {
    width: 250px;
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
  margin-left: 32px;
  font-size: 12px;
  z-index: 10000000;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-left: 42px;
  }
`

export const SearchListItem = styled.div`
  padding: 2px 0px;
  z-index: Infinity;
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
