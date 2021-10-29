import styled from 'styled-components'

export const ChartContainer = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '48.5%')};
  background: ${(props) => props.theme.secondary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
`

export const ChartWrap = styled.div`
  width: 82%;
  margin-top: 7%;
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
