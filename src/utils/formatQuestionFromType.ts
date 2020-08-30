import { ICountry } from '../types'
import { QuestionType } from '../questionTypes'

export const formatQuestionFromType = (
  type: QuestionType,
  country: ICountry
): string => {
  switch (type) {
    case QuestionType.capital:
      return `${country.capital} is the capital of`
    case QuestionType.region:
      return `In which region is ${country.name} located?`
    case QuestionType.flag:
      return 'Which country does this flag belong to?'
    default:
      return ''
  }
}
