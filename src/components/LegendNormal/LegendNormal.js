import React from 'react'
import styled from 'styled-components'

const LegendNormalWrap = styled.div`
  font-size: 1.2rem;
`

const LegendNormal = (props) => (
  <LegendNormalWrap>{props.children}</LegendNormalWrap>
)

export default LegendNormal
