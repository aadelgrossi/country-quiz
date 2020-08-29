import React from 'react'

import { Container, Alternative } from './styles'

const QuestionCard: React.FC = () => (
  <Container>
    <h2>Kuala Lumpur is the capital of</h2>
    <Alternative>
      <span>A</span>
      <span>Vietnam</span>
    </Alternative>
    <Alternative>
      <span>B</span>
      <span>Malaysia</span>
    </Alternative>
    <Alternative>
      <span>C</span>
      <span>Sweden</span>
    </Alternative>
    <Alternative>
      <span>D</span>
      <span>Austria</span>
    </Alternative>
  </Container>
)

export default QuestionCard
