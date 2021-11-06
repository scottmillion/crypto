import React from 'react'
import styled from 'styled-components'
import { screenSizeWidth } from 'utils'

const LegendNormalWrap = styled.div`
  font-size: 8px;
  @media (min-width: 400px) {
    font-size: 0.8rem;
  }

  @media ${screenSizeWidth.desktopM} {
    font-size: 1rem;
  }
`

const LegendNormal = (props) => (
  <LegendNormalWrap>{props.children}</LegendNormalWrap>
)

export default LegendNormal
