import styled from 'styled-components'

export const Input = styled.input`
  background: ${(props) => props.theme.tertiary};
  color: inherit;
  font-size: 1.1rem;
  width: ${(props) => props.width}px;
  height: 63px;
  padding: 0px 0px 0px 60px;
  margin-right: 27px;
  border: none;
  border-radius: 20px;

  &::placeholder {
    color: inherit;
    font-size: 1.1rem;
  }
  &:focus {
    outline: none;
    /* border: 2px solid #737373;
    border-radius: 20px; */
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
