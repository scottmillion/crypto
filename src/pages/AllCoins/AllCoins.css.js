import styled from 'styled-components'

export const ChartsContainer = styled.div`
  /* outline: 1px solid blue; */
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CoinContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  padding-block: 20px;
  margin-top: 25px;
  margin-bottom: 59px;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 90%;
`

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
`

export const Loading = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
