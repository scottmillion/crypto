import styled from 'styled-components'

export const Hr = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.hrLineTop};
  border-bottom: 1px solid ${(props) => props.theme.hrLineBottom};
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-block: ${(props) => (props.isLabel ? '0px' : '14px')};
`

export const RowWrap = styled.div`
  width: 100%;
`

export const Table = styled.div`
  padding: 6px 18px 0px 18px;
  display: flex;
  flex-wrap: wrap;
`
