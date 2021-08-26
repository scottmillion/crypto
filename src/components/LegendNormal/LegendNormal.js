import React from 'react'
import styled from 'styled-components'
import { screenSizeWidth } from 'utils'

const LegendNormalWrap = styled.div`
  @media ${screenSizeWidth.none} {
    font-size: 0.8rem;
  }
  @media ${screenSizeWidth.desktopM} {
    font-size: 1rem;
  }
  @media ${screenSizeWidth.desktopL} {
    font-size: 1.2rem;
  }
`

const LegendNormal = (props) => (
  <LegendNormalWrap>{props.children}</LegendNormalWrap>
)

export default LegendNormal
