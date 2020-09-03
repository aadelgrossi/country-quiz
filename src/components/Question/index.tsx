import React from 'react'

import Card from '../Card'
import Choice from '../Choice'
import { IQuestion } from '../../models'

import { formatQuestionFromType } from '../../utils/formatQuestionFromType'

interface QuestionProps {
  data: IQuestion
}

const Question: React.FC<QuestionProps> = ({ data }) => {
  return (
    <Card>
      <h2>{formatQuestionFromType(data.type, data.correctAnswer)}</h2>

      {['A', 'B', 'C', 'D'].map((questionAlternative, index) => (
        <Choice key={questionAlternative} clickAction={() => {}}>
          <span>{questionAlternative}</span>
          <span>{data.choices[index].name}</span>
        </Choice>
      ))}
    </Card>
  )
}

export default Question
