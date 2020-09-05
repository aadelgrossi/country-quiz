import React from 'react'
import Question from '../Question'
import { useQuiz } from '../../hooks/useQuiz'

import Card from '../Card'
import { Container } from './styles'

const Quiz: React.FC = () => {
  const { questions, currentQuestion, numQuestions } = useQuiz()

  return (
    <Container>
      <Card hasImage>
        <span>
          Question <strong>{currentQuestion + 1}</strong> of{' '}
          <strong>{numQuestions}</strong>
        </span>

        <Question data={questions[currentQuestion]} />
      </Card>
    </Container>
  )
}

export default Quiz
