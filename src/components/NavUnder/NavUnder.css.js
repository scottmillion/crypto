import styled from 'styled-components'

export const NavBulletPoint = styled.div`
  margin-right: 8px;
  font-size: 24px;
`

export const NavWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
`

export const NavUnderContainer = styled.div`
  max-width: 90%;
  height: 30px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  @media (min-width: 768px) {
    height: 46px;
  }
`

export const NavUnderLi = styled.li`
  /* outline: 1px solid green; */
  font-size: 12px;
  padding-inline: 12px;
  display: flex;
  align-items: center;
`

export const NavUnderUl = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
`

export const PercentDisplay = styled.div`
  position: relative;
  overflow: hidden;
  width: 55px;
  height: 12px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.secondaryInverted} 0%,
    ${(props) => props.theme.secondaryInverted}
      ${(props) => props.percent - 10}%,
    #2172e5 ${(props) => props.percent - 10}%,
    #2172e5 100%
  );
  border-radius: 7px;
  margin-left: 10px;
`

export const Circle = styled.div`
  height: 12px;
  width: 14px;
  background: ${(props) => props.theme.secondaryInverted};
  border-radius: 7px;
  margin-left: calc(${(props) => props.percent}% - 12px);
`

export const NavUnderImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.marginRight}px;
  > img {
    width: 70%;
  }
`
