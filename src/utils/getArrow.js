import styled from 'styled-components'
import { DownArrow, UpArrow } from '@styled-icons/boxicons-solid'

const StyledUpArrow = styled(UpArrow)`
  margin-right: 3px;
`

const StyledDownArrow = styled(DownArrow)`
  margin-right: 3px;
`

export function getArrow(num) {
  return num >= 0 ? (
    <StyledUpArrow size=".6rem" color="inherit" />
  ) : (
    <StyledDownArrow size=".6rem" color="inherit" />
  )
}
