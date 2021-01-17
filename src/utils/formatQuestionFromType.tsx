import React from 'react'
import { Country, QuestionType } from '../models'

import Flag from '../components/Flag'

export const formatQuestionFromType = (
  type: QuestionType,
  { name, flag, capital }: Country
): JSX.Element | null => {
  switch (type) {
    case 'capital':
      return <h2>{capital} is the capital of</h2>
    case 'flag':
      return <Flag country={name} url={flag} />
    default:
      return null
  }
}
