import styled from "styled-components";

export const Container = styled.div`
    margin-top: 66px;
    margin-bottom: 88px;
    margin-right: 120px;
    margin-left: 120px;
    max-width: 1920px;
    background: #1F2128;
    border: 10px solid #191B1F;
    border-radius: 25px;
`;

export const CurrencyImage = styled.img`
    position: absolute;
    margin: 22px 22px 0px 28px;
`;

export const CurrencySymbol = styled.div`
    width: 33px;
    height: 33px;
    font-weight: 500;
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
    background: #2C2F36;
    padding: 14px 21px;
    font-size: 1.1rem;
`;

export const Nav = styled.div`
    height: 97px;
    background: #191B1F;
    display: flex;
    justify-content: space-between;
`;

export const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLeftLi = styled.li`
    font-size: 1.3rem;
    font-weight: 500;
    display: inline-block;
    width: 167px;
    border-radius: 20px;
    text-align: center;
    padding-top: 13px;
    padding-bottom: 13px;
    background: ${(props) => props.background};
`;

export const NavLeftUl = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 95px;
`;

export const NavRight = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 3px;
`;

export const NavRightInputContainer = styled.div``;

export const NavRightInput = styled.input`
    width: 452px;
    height: 63px;
    border: 2px solid #191B1F;
    border-radius: 20px;
    background: #2C2F36;
    padding: 0;
    margin-right: 27px;
    color: white;
    font-size: 1.1rem;
    padding-left: 58px;
    &::placeholder {
      color: inherit;
      font-weight: 700;
     font-size: 1.1rem;
    }
    &:focus {
      outline: none;
      border: 2px solid #737373;
      border-radius: 20px;
    }
`;

export const NavRightSelectContainer = styled.div`
position: relative;
    margin-right: 25px;
    display: flex;
    flex-wrap: nowrap;
    width: 115px;
    height: 35px;
    border-radius: 20px;
    background: #2C2F36;
    padding: 14px 10px;
    font-size: 1.1rem;

`;

export const NavUnder = styled.div`
    width: 906px;
    height: 55px;
    background: #191B1F;
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
    background: inherit;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    margin-left: 5px;
    &:focus {
      outline: none;
    }
  `;

export const SelectArrow = styled.div`
    position: absolute;
    margin-left: 80px;
    margin-top: 3px;
    color: #00FF5F; 
    pointer-events: none; 
`;



