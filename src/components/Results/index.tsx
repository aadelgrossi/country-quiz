import React from 'react'

import { Contents } from './styles'
import Button from '../Button'
import resultsImg from '../../assets/results.svg'
import Card from '../Card'
import { useQuiz } from '../../hooks/useQuiz'

const Results: React.FC = () => {
  const { score, restartQuiz } = useQuiz()

  const scoreText = () => {
    switch (score) {
      case 0:
        return 'Aww you got no correct answers :('
      default:
        return (
          <>
            You got <strong>{score}</strong> answer{score > 1 ? 's' : ''}{' '}
            correct.
          </>
        )
    }
  }

  return (
    <Card>
      <Contents>
        <img src={resultsImg} alt="Quiz results" />
        <h1>Results</h1>
        <span>{scoreText()}</span>

        <Button variant="outline" onClick={restartQuiz}>
          Try again
        </Button>
      </Contents>
    </Card>
  )
}

export default Results
