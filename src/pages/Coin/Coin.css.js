import styled from 'styled-components'

export const BluePlus = styled.span`
  background: #2172e5;
  color: white;
  padding-inline: 5px;
  margin-right: 10px;
  border-radius: 4px;
  &:after {
    content: '+';
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
`

export const ContentContainer = styled.div`
  width: 90%;
`

export const CoinData = styled.div`
  /* outline: 1px solid yellow; */
  margin: 5px;
  
  flex: 1 1 auto;
  background: ${(props) => props.theme.secondary};
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px;
`

export const CoinDataItem = styled.div`
  margin-bottom: 5px;
`

export const CoinDataLabel = styled.span`
  color: ${(props) => props.color || ''};
  font-weight: 700;
`

export const CoinInfo = styled.div`
  /* outline: 1px solid yellow; */
  font-size: 1rem;
  width: 100%;
  text-align: center;
`

export const CoinInfoWrap = styled.div`
  flex: 1 1 auto;
  margin: 5px;
  
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px; 
`

export const CoinHomepage = styled.div` 
  margin-top: 10px;
  font-size: 12px;
  & a:link, a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.mainFont};
    padding-block: 4px;
    padding-inline: 10px;
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
  } 
`

export const CoinPrices = styled.div`
  /* outline: 1px solid yellow; */
  flex: 1 1 auto;
  margin: 5px;
  background: ${(props) => props.theme.secondary};
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px;
`

export const CoinSummary = styled.div`
  /* outline: 1px solid red; */
  margin-block: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Description = styled.div`
  /* outline: 1px solid green; */
  margin-inline: 5px;
  background: ${(props) => props.theme.secondary};
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px; 

  & a:link, a:visited {
    text-decoration: none;
    color: #2172e5;
    
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
  } 
`

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
`

export const H2 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin-block: 10px;
`

export const Hr = styled.hr`
  margin-block: 10px;
  width: 250px;
`

export const Img = styled.img`
  width: 60px;
  padding: 24px;
  background: ${(props) => props.theme.primary};
`

export const ImgWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`

export const LinkList = styled.div`
  margin-block: 20px;
  display: flex;
  flex-wrap: wrap;
`

export const LinkListItem = styled.div`
  font-size: 12px;
  margin: 5px;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  padding-block: 12px;
  padding-inline: 18px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;

  & a:link, a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.mainFont};
  } 
`