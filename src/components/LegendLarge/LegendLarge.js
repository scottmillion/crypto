import React from 'react'
import styled from 'styled-components'
import { screenSizeWidth } from 'utils'

const LegendLargeWrap = styled.div`
  @media ${screenSizeWidth.none} {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  @media ${screenSizeWidth.desktopM} {
    font-size: 1.7rem;
    line-height: 2.2rem;
  }
  @media ${screenSizeWidth.desktopL} {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 2.9rem;
  }
`

const LegendLarge = (props) => (
  <LegendLargeWrap>{props.children}</LegendLargeWrap>
)

export default LegendLarge
