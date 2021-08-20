import React from 'react'
import styled from 'styled-components'

const LegendLargeWrap = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 2.9rem;
`

export const LegendLarge = (props) => (
  <LegendLargeWrap>{props.children}</LegendLargeWrap>
)
