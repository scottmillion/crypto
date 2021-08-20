import styled from 'styled-components'

export const BulletPoint = styled.span`
  margin-right: 6px;
`

export const CellItem = styled.div`
  margin-top: -28px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

export const CellItemNumber = styled.div`
  color: ${(props) => props.color};
`

export const Circle = styled.div`
  height: 8px;
  width: 8px;
  background: ${(props) => props.color1};
  /* background: blue; */
  /* opacity: 0.3; */
  border-radius: 7px;
  margin-left: calc(${(props) => props.percent}% - 7px);
`

export const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`

export const PercentDisplay = styled.div`
  margin-top: 10px;
  width: 100%;
  position: relative;
  overflow: hidden;
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
