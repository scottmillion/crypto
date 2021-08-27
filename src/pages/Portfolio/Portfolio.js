import React from 'react'
import { Container, ContentContainer, H1 } from './Portfolio.css'

class Portfolio extends React.Component {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <Container>
        <ContentContainer>
          <H1>Your statistics</H1>
        </ContentContainer>
      </Container>
    )
  }
}

export default Portfolio
