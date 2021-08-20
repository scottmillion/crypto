import React from 'react'
import styled from 'styled-components'

const LegendNormalWrap = styled.div`
  font-size: 1.2rem;
`

export const LegendNormal = (props) => (
  <LegendNormalWrap>{props.children}</LegendNormalWrap>
)
