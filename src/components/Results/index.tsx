import React from 'react'

import { Contents } from './styles'
import Button from '../Button'
import resultsImg from '../../assets/results.svg'
import Card from '../Card'
import { useQuiz } from '../../hooks/useQuiz'

const Results: React.FC = () => {
  const { score, restartQuiz } = useQuiz()

  return (
    <Card>
      <Contents>
        <img src={resultsImg} alt="Quiz results" />
        <h1>Results</h1>
        <span>
          {score
            ? `You got ${(<strong>{score}</strong>)} correct answer${
                score > 1 ? 's' : ''
              }`
            : 'Aww you got no correct answers :('}
        </span>

        <Button variant="outline" onClick={restartQuiz}>
          Try again
        </Button>
      </Contents>
    </Card>
  )
}

export default Results
