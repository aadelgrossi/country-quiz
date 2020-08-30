import React, { useState, createContext, useContext, useEffect } from 'react'
import { getCountries } from '../services/api'
import { useQuery } from 'react-query'

import _ from 'lodash'

import { getQuestionTypesSequence } from '../utils/getQuestionTypesSequence'
import { IQuestion, ICountry } from '../types'

interface QuizContextData {
  questions: IQuestion[]
}

enum NumQuestions {
  easy = 4,
  med = 8,
  hard = 10
}

enum QuestionType {
  capital = 'capital',
  flag = 'flag',
  region = 'region'
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData)

export const QuizProvider: React.FC = ({ children }) => {
  const [countriesData, setCountriesData] = useState<ICountry[]>(
    [] as ICountry[]
  )
  const [questions, setQuestions] = useState([] as IQuestion[])
  const { data } = useQuery('countriesData', getCountries)

  useEffect(() => {
    async function buildQuestions() {
      const allCategories = Object.values(QuestionType)

      const questionTypes = getQuestionTypesSequence(
        allCategories,
        NumQuestions.easy
      )

      const newQuestions = questionTypes.map((type: QuestionType) => {
        const choices = _.sampleSize(data, 4)
        return {
          type,
          choices,
          correctAnswer: _.sample(choices)
        } as IQuestion
      })
      setQuestions(newQuestions)
    }

    buildQuestions()
  }, [data])

  return (
    <QuizContext.Provider
      value={{
        questions
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
