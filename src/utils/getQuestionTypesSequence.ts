import { QuestionType } from '../questionTypes'

export const getQuestionTypesSequence = (
  categories: QuestionType[],
  numQuestions: number
): QuestionType[] => {
  const amount = Math.ceil(numQuestions / categories.length)

  return Array(amount)
    .fill(categories)
    .flat()
    .splice(0, numQuestions) as QuestionType[]
}
