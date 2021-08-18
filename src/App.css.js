import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.primary};
    border: 10px solid ${props => props.theme.secondary};
`;

export const CurrencyImage = styled.img`
    position: absolute;
    margin: 22px 22px 0px 28px;
`;

export const CurrencySymbol = styled.div`
    width: 3rem;
    height: 33px;
    font-size: 1.3rem;
    background: #191B1F;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #00FF5F;
`;

export const Mode = styled.div`
    display: flex;
    height: 35px;
    border-radius: 20px;
    background: ${(props) => props.theme.tertiary};
    padding: 14px 21px;
    font-size: 1.1rem;
`;

export const Nav = styled.div`
    height: 97px;
    background: ${props => props.theme.secondary};
    display: flex;
    justify-content: space-between;
`;

export const NavBulletPoint = styled.div`
    margin-right: 8px;
    font-size: 24px;
`;

export const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLeftLi = styled.li`
    font-size: 1.3rem;
    display: inline-block;
    width: 167px;
    border-radius: 20px;
    text-align: center;
    padding-top: 13px;
    padding-bottom: 13px;
    background: ${(props) => props.theme.tertiary};
`;

export const NavLeftUl = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 102px;
`;

export const NavRight = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 10px;
`;

export const NavRightInputContainer = styled.div``;

export const NavRightSelectContainer = styled.div`
position: relative;
    margin-right: 28px;
    display: flex;
    flex-wrap: nowrap;
    width: 115px;
    height: 35px;
    border-radius: 20px;
    background: ${(props) => props.theme.tertiary};
    padding: 14px 10px;
    font-size: 1.1rem;

`;

export const NavUnder = styled.div`
    width: 906px;
    height: 55px;
    background: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px; 
`;

export const NavUnderContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    padding-bottom: 25px;
`;

export const NavUnderLi = styled.li`
    font-size: 1rem;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    align-items: center;
`;

export const NavUnderUl = styled.ul`
    padding: 0;
    display: flex;
    list-style: none;
`;

export const Select = styled.select`
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    width: 65px;
    border: none;
    background: ${(props) => props.theme.tertiary};
    color: ${props => props.theme.mainFont};
    font-size: 1.1rem;
    margin-left: 5px;
    
    &:focus {
      outline: none;
    }
  `;

export const SelectArrow = styled.div`
    position: absolute;
    margin-left: 38px;
    margin-top: 3px;
    color: #00FF5F; 
    pointer-events: none; 
`;

export const SelectWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const  PercentDisplay = styled.div`
  position: relative;
  overflow: hidden;
  width: 55px;
  height: 14px;
  background: linear-gradient(to right,  #fff 0%, #fff ${(props) => props.percent - 10}%, #2172E5 ${(props) => props.percent - 10}%, #2172E5 100%);
  border-radius: 7px;
  margin-left: 10px;
`;

export const  Circle = styled.div`
    height: 14px;
    width: 14px;
    background: white;
    border-radius: 7px;
    margin-left: calc(${(props) => props.percent}% - 12px);
`;


export const NavUnderImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${(props) => props.marginRight}px;
    > img {
        width: 70%;
    }
`;