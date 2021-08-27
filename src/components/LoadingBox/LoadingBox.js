import React from 'react'
import styled from 'styled-components'
import FadeLoader from 'react-spinners/FadeLoader'
import BarLoader from 'react-spinners/BarLoader'
import { css } from '@emotion/react'
import { withTheme } from 'styled-components'

const Loading = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const override = css`
  width: 90%;
  border-radius: 7px;
`

const LoadingBox = (props) => (
  <Loading height={props.height}>
    {props.bar ? (
      <BarLoader color={props.theme.tertiary} height={10} css={override} />
    ) : (
      <FadeLoader
        color={props.theme.tertiary}
        height={15}
        width={5}
        radius={2}
        margin={1}
        speedMultiplier=".8"
      />
    )}
  </Loading>
)

export default withTheme(LoadingBox)

// loading={loading} css={override} size={150}
