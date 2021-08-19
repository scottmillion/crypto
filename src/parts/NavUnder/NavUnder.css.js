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
  width: 906px;
  height: 55px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export const NavUnderLi = styled.li`
  font-size: 1rem;
  padding-right: 16px;
  padding-left: 16px;
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
  height: 14px;
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff ${(props) => props.percent - 10}%,
    #2172e5 ${(props) => props.percent - 10}%,
    #2172e5 100%
  );
  border-radius: 7px;
  margin-left: 10px;
`

export const Circle = styled.div`
  height: 14px;
  width: 14px;
  background: white;
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
