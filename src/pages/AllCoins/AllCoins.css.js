import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  /* background: grey; */
  margin-left: 104px;
  margin-right: 104px;
`;

export const CoinContainer = styled.div`
  /* outline: 1px solid blue; */
  background: #191B1F;
  border-radius: 20px;
  padding-bottom: 60px;
  margin-top: 20px;
  margin-bottom: 59px;
`;

export const Row = styled.div`
 /* outline: 1px solid red; */
 padding-left: 28px;
 display: flex;
 align-items: center;
`;

export const Cell = styled.div`
 /* outline: 1px solid green; */
 font-size: ${(props) => props.size || '18'}px;
 font-weight: ${(props) => props.weight};
 height: 60px;
 width: ${(props) => props.width}px;
 padding-left: ${(props) => props.paddingLeft}px;
 display: flex;
 align-items: center;
`;

export const Img = styled.img`
  width: 34px;
  height: 34px;
`;