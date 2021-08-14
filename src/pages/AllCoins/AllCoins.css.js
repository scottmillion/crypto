import styled from "styled-components";

export const Cell = styled.div`
 /* outline: 1px solid green; */
 color: ${(props) => props.number ? (props.number < 0 ? "#FE1040" : "#00FC2A") : ''};
 font-size: ${(props) => props.size || '18'}px;
 font-weight: ${(props) => props.weight};
 height: 60px;
 width: ${(props) => props.width}px;
 display: flex;
 align-items: center;
`;

export const ChartPrice = styled.div` 
  width: 80%;   
  margin-top: 7%;
  margin-bottom: 4%;
  margin-left: 9%;
`;

export const ChartVolume = styled.div` 
  width: 80%;
  margin-top: 7%;
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
`;

export const ChartContainerPrice = styled.div`
  position: relative;
  width: 48%;
  background: #191B1F;
  border-radius: 20px;
`;

export const ChartContainerVolume = styled.div`
  position: relative;
  width: 48%;
  background: #191B1F;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;


export const ChartsContainer = styled.div`
  /* outline: 1px solid blue; */
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ChartLegendPrice = styled.div` 
  position: absolute;
  margin-top: 17px;
  margin-left: 21px;
`;

export const ChartLegendVolume = styled.div` 
  position: absolute;
  margin-top: 17px;
  width: 95%;  
`;


export const CoinContainer = styled.div`
  /* outline: 1px solid blue; */
  background: #191B1F;
  border-radius: 20px;
  padding-bottom: 60px;
  margin-top: 20px;
  margin-bottom: 59px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-left: 104px;
  margin-right: 104px;
`;

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 8px;
`;

export const LegendNormal = styled.div`
  font-size: .9rem;
`;

export const LegendLarge = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.7rem;
`;

export const Row = styled.div`
 /* outline: 1px solid red; */
 padding: 0px 28px;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;

