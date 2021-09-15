import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.primary};
  border: 10px solid ${(props) => props.theme.secondary};
  max-width: 1200px;
  margin: auto;
`
