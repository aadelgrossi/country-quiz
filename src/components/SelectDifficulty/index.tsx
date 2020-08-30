import React from 'react'

import Card from '../Card'
import Choice from '../Choice'
import { useQuiz } from '../../hooks/useQuiz'

import { difficulties } from '../../difficulties'

const SelectDifficulty: React.FC = () => {
  const { chooseDifficulty } = useQuiz()

  return (
    <Card>
      <h2>Choose a difficulty:</h2>

      <Choice
        clickAction={() => chooseDifficulty('easy')}
        choiceType="difficulty"
      >
        <strong>Easy</strong>
        <span>{difficulties.easy.numQuestions} questions</span>
        <span>{difficulties.easy.numCountries} countries</span>
      </Choice>
      <Choice
        clickAction={() => chooseDifficulty('medium')}
        choiceType="difficulty"
      >
        <strong>Medium</strong>
        <span>{difficulties.medium.numQuestions} questions</span>
        <span>{difficulties.medium.numCountries} countries</span>
      </Choice>
      <Choice
        clickAction={() => chooseDifficulty('hard')}
        choiceType="difficulty"
      >
        <strong>Hard</strong>
        <span>{difficulties.hard.numQuestions} questions</span>
        <span>{difficulties.hard.numCountries} countries</span>
      </Choice>
    </Card>
  )
}

export default SelectDifficulty
