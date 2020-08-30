import React from 'react'

import { Container } from './styles'

interface ChoiceProps {
  choiceType?: string
  clickAction(): void
}

const Choice: React.FC<ChoiceProps> = ({
  children,
  choiceType = 'answer',
  clickAction
}) => {
  return (
    <Container onClick={clickAction} choiceType={choiceType}>
      {children}
    </Container>
  )
}

export default Choice
