import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: calc(90% + 10px);
`
export const Description = styled.div`
  background: ${(props) => props.theme.secondary};
  word-break: break-all;
  margin-inline: 5px;
  padding-inline: 36px;
  padding-block: 18px;
  border-radius: 25px;
  & a:link,
  a:visited {
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
  margin-left: 8px;
`

export const H2 = styled.h1`
  margin-left: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  margin-block: 10px;
`

export const LinkList = styled.div`
  margin-block: 20px;
  display: flex;
  flex-wrap: wrap;
`
