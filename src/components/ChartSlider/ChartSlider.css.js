import styled from 'styled-components'

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? props.left : '')};
  right: ${(props) => (props.right ? props.right : '')};
  margin-inline: 5px;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  z-index: 1000;
`

export const Wrapper = styled.div`
  margin-top: 14px;
  position: relative;
`
