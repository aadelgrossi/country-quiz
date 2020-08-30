import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback
} from 'react'
import { getCountries } from '../services/api'

import _ from 'lodash'

import { getQuestionTypesSequence } from '../utils/getQuestionTypesSequence'
import { IQuestion, ICountry, Status } from '../types'
import { QuestionType } from '../questionTypes'
import { difficulties } from '../difficulties'

interface QuizContextData {
  questions: IQuestion[]
  quizStatus: Status
  chooseDifficulty(difficulty: string): void
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData)

export const QuizProvider: React.FC = ({ children }) => {
  const [quizStatus, setQuizStatus] = useState<Status>('standby')
  const [numQuestions, setNumQuestions] = useState(0)
  const [questions, setQuestions] = useState([] as IQuestion[])
  const [countries, setCountries] = useState<ICountry[]>([] as ICountry[])

  const buildQuestions = useCallback(() => {
    const allCategories = Object.values(QuestionType)
    const questionTypes = getQuestionTypesSequence(allCategories, numQuestions)

    const newQuestions = questionTypes.map((type: QuestionType) => {
      const choices = _.sampleSize(countries, 4)
      return {
        type,
        choices,
        correctAnswer: _.sample(choices)
      } as IQuestion
    })

    setQuestions(newQuestions)
  }, [countries, numQuestions])

  const chooseDifficulty = useCallback(async (difficulty: string) => {
    const data = await getCountries(difficulties[difficulty].countries)

    console.log(data)

    setNumQuestions(difficulties[difficulty].numQuestions)
    setCountries(data)
    setQuizStatus('ongoing')
  }, [])

  useEffect(() => {
    buildQuestions()
  }, [numQuestions, countries])

  return (
    <QuizContext.Provider
      value={{
        questions,
        quizStatus,
        chooseDifficulty
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz(): QuizContextData {
  const context = useContext(QuizContext)

  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider')
  }

  return context
}
