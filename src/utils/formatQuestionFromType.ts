import { Country, QuestionType } from '../models'

export const formatQuestionFromType = (
  type: QuestionType,
  country: Country
): string => {
  switch (type) {
    case 'capital':
      return `${country.capital} is the capital of`
    case 'region':
      return `In which region is ${country.name} located?`
    case 'flag':
      return 'Which country does this flag belong to?'
    default:
      return ''
  }
}
