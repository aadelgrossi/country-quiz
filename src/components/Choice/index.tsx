import React from 'react'

import { Container } from './styles'

interface ChoiceProps {
  choiceType?: string
}

const Choice: React.FC<ChoiceProps> = ({ children, choiceType = 'answer' }) => {
  return <Container choiceType={choiceType}>{children}</Container>
}

export default Choice
