import React from 'react'

import Card from '../Card'
import Choice from '../Choice'

const SelectDifficulty: React.FC = () => (
  <Card>
    <h2>Choose a difficulty:</h2>

    <Choice choiceType="difficulty">
      <strong>Easy</strong>
      <span>4 questions</span>
      <span>10 countries</span>
    </Choice>
    <Choice choiceType="difficulty">
      <strong>Medium</strong>
      <span>8 questions</span>
      <span>20 countries</span>
    </Choice>
    <Choice choiceType="difficulty">
      <strong>Hard</strong>
      <span>12 questions</span>
      <span>40 countries</span>
    </Choice>
  </Card>
)

export default SelectDifficulty
