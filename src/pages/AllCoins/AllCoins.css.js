import styled from "styled-components";

export const BulletPoint = styled.span`
    margin-right: 6px;
`;

export const Cell = styled.div`
 /* outline: 1px solid green; */
 position: relative;
 color: ${(props) => props.number ? (props.number < 0 ? "#FE1040" : "#00FC2A") : ''};
 font-size: ${(props) => props.size || '18'}px;
 font-weight: ${(props) => props.weight};
 height: 60px;
 width: ${(props) => props.width}px;
 display: flex;
 align-items: center;
 flex-wrap: wrap;
`;

export const CellItem = styled.div`
  margin-top: -28px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

export const CellItemNumber = styled.div`
  color: ${props => props.color};  
`

export const ChartPrice = styled.div` 
  width: 80%;   
  margin-top: 7%;
  margin-bottom: 4%;
  margin-left: 9%;
`;

export const ChartVolume = styled.div` 
  width: 82%;
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ChartContainerPrice = styled.div`
  position: relative;
  width: 48.5%;
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
`;

export const ChartContainerVolume = styled.div`
  position: relative;
  width: 48.5%;
  background: ${(props) => props.theme.secondary};
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

export const  Circle = styled.div`
    height: 8px;
    width: 8px;
    background: ${(props) => props.color1};
    border-radius: 7px;
    margin-left: calc(${(props) => props.percent}% - 7px);
`;

export const CoinContainer = styled.div`
  /* outline: 1px solid blue; */
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 35px;
  margin-top: 25px;
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
  font-size: 1.2rem;
`;

export const LegendLarge = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 2.9rem;
`;

export const  PercentDisplay = styled.div`
  margin-top: 10px;
  width: 100%;  
  position: relative;
  overflow: hidden;
  height: 8px;
  background: linear-gradient(to right,  ${(props) => props.color1} 0%, ${(props) => props.color1} ${(props) => props.percent - 3.5}%, ${(props) => props.color2} ${(props) => props.percent}%, ${(props) => props.color2} 100%);
  border-radius: 7px;
`;

export const Row = styled.div`
 padding: 0px 4px;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;

