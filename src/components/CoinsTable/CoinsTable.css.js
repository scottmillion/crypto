import styled from 'styled-components'
import { SelectArrows } from '@styled-icons/entypo/SelectArrows'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowLeftS } from '@styled-icons/remix-fill/ArrowLeftS'
import { ArrowRightS } from '@styled-icons/remix-fill/ArrowRightS'

export const ApiSettings = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-inline: 14px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 1219px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`

export const ApiSettingsLeft = styled.div``

export const ApiSettingsRight = styled.div``

export const Order = styled.div`
  display: inline;

  @media (max-width: 499px) {
    display: none;
  }
`

export const SelectArrow = styled(SelectArrows)`
  width: 12px;
  margin-bottom: 3px;
`

export const TopBottom = styled.span`
  margin-right: 10px;
  font-size: 28px;
  font-weight: 700;
`
export const DropDownArrow = styled(ArrowDropDown)`
  width: 24px;
  margin-bottom: 2px;
`
export const LeftArrow = styled(ArrowLeftS)`
  margin-bottom: 2px;
  width: 20px;
`
export const RightArrow = styled(ArrowRightS)`
  margin-bottom: 2px;
  width: 20px;
`

export const ShowInput = styled.select`
  background: ${(props) => props.theme.secondary};
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  border: none;
  width: fit-content;
  margin-left: 1px;
  margin-right: 8px;
`
