import styled from 'styled-components'

export const BulletPoint = styled.span`
  margin-right: 6px;
`

export const TopItemsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TopItem = styled.div`
  margin-top: 2px;
  color: ${(props) => props.color};
`

export const PercentDisplay = styled.div`
  margin-bottom: 18px;
  overflow: hidden;
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    ${(props) => props.color1} 0%,
    ${(props) => props.color1} ${(props) => props.percent - 1}%,
    ${(props) => props.color2} ${(props) => props.percent - 1}%,
    ${(props) => props.color2} 100%
  );
  border-radius: 7px;
`

export const PercentDisplayCircle = styled.div`
  height: 8px;
  width: 8px;
  background: ${(props) => props.color1};
  border-radius: 7px;
  margin-left: calc(${(props) => props.percent}% - 7px);
`
