import React from 'react'

import Card from '../Card'
import Choice from '../Choice'
import { useQuiz } from '../../hooks/useQuiz'

import { difficulties } from '../../parameters/difficulties'
import { Difficulty } from '../../models'

import { Contents } from './styles'

const SelectDifficulty: React.FC = () => {
  const { chooseDifficulty } = useQuiz()

  return (
    <Card hasImage>
      <Contents>
        <h2>Choose a difficulty:</h2>
        {difficulties.map((difficulty: Difficulty) => (
          <Choice
            key={difficulty.name}
            clickAction={() => chooseDifficulty(difficulty)}
            choiceType="difficulty"
          >
            <strong>{difficulty.name}</strong>
            <span>{difficulty.numQuestions} questions </span>
            <span>{difficulty.numCountries} countries </span>
          </Choice>
        ))}
      </Contents>
    </Card>
  )
}

export default SelectDifficulty
