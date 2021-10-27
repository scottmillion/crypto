import styled from 'styled-components'

export const Total = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-top: ${(props) => props.marginTop || 0}px;
  background: #2172e5;
  border-radius: ${(props) => props.borderRadius}px;
  overflow: hidden;
`
export const Val1 = styled.div`
  background: linear-gradient(
    to right,
    #1ad761 ${(props) => props.width - 5}px,
    rgba(0, 0, 0, 0) ${(props) => props.width - 5}px
  );
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.borderRadius}px;
  overflow: hidden;
`

export const Val2 = styled.div`
  height: ${(props) => props.height}px;
  background: white;
  background: ${(props) => props.theme.secondaryInverted};
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.borderRadius}px;
  overflow: hidden;
`

export const Circle = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.height}px;
  background: #1ad761;
  border-radius: ${(props) => props.borderRadius}px;
  margin-left: ${(props) => props.left - 10}px;
`
