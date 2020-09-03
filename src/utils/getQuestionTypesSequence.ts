import { questionTypes } from '../parameters/question_types'
import { QuestionType } from '../models'

export const getQuestionTypesSequence = (
  numQuestions: number
): QuestionType[] => {
  const amount = Math.ceil(numQuestions / questionTypes.length)

  return Array(amount)
    .fill(questionTypes)
    .flat()
    .splice(0, numQuestions) as QuestionType[]
}
