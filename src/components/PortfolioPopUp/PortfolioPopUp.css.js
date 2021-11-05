import { DebounceInput } from 'react-debounce-input'
import styled from 'styled-components'

export const Buttons = styled.div`
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

export const CloseOption = styled.div`
  position: absolute;
  line-height: 40px;
  top: 16px;
  right: 20px;
  color: #06d554;
  font-size: 56px;
  font-weight: 600;

  @media (min-width: 600px) {
    font-size: 72px;
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

export const CoinThumbnail = styled.div`
  width: 150px;
  height: 180px;
  margin-right: 20px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 25px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;

  @media (max-width: 599px) {
    align-items: center;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const H2 = styled.h2`
  margin-top: 18px;
  font-size: 24px;
`

export const Img = styled.img`
  width: 100px;
  padding: 24px;
  background: ${(props) => props.theme.primary};
`

export const ImgPlaceHolder = styled.div`
  font-size: 10px;
`

export const ImgWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`

export const Input = styled(DebounceInput)`
  background: ${(props) => props.theme.secondary};
  color: inherit;
  font-size: 1.1rem;
  height: 48px;
  width: 250px;
  font-family: inherit;
  padding-left: 56px;
  padding-right: 20px;
  border: none;
  border-radius: 10px;
  margin-bottom: 12px;

  /* Chrome, Safari, Edge, Opera */
  &&::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  && [type='number'] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: inherit;
    font-size: 1.1rem;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    width: 350px;
    margin-bottom: 0px;
  }

  @media (max-width: 599px) {
    font-size: 14px;
    padding-left: 32px;

    &::placeholder {
      font-size: 14px;
    }
  }
`

export const P = styled.p`
  padding-inline: 20px;
  text-align: center;
`

export const PopUp = styled.div`
  width: 90%;
  height: 600px;
  z-index: 11;
  background: ${(props) => props.theme.primary};
  margin: auto;
  border-radius: 20px;
  @media (min-width: 600px) {
    height: 350px;
  }
  @media (min-width: 768px) {
    width: 650px;
  }
`

export const PopUpContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

export const PopUpWrap = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchList = styled.div`
  position: absolute;
  background: ${(props) => props.theme.secondary};
  color: inherit;
  padding: 0px 20px 0px 20px;
  margin-left: 42px;
  font-size: 1rem;
  z-index: 10000000;

  @media (max-width: 599px) {
    margin-top: -12px;
    margin-left: 22px;
    padding: 0px 20px 0px 20px;
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

export const CloseButton = styled.button`
  background: white;
  border: 1px solid white;
  color: ${(props) => props.theme.buttonClose};
  font-weight: 700;
  margin-inline: 4px;
  padding: 14px 60px;
  margin-bottom: 10px;
  border-radius: 12px;
  &:hover {
    background: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondaryInverted};
  }

  @media (min-width: 600px) {
    margin-bottom: 0px;
  }
`

export const SaveButton = styled.button`
  background: rgb(6, 213, 84);
  border: 1px solid rgb(6, 213, 84);
  color: ${(props) => props.theme.mainFont};
  font-weight: 700;
  margin-inline: 4px;
  padding: 14px 60px;
  border-radius: 12px;
  &:hover {
    background: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondaryInverted};
  }
`
