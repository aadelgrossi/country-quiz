import React, { useState, createContext, useContext, useCallback } from 'react'
import { getCountries } from '../services/api'

import _ from 'lodash'

import { getQuestionTypesSequence } from '../utils/getQuestionTypesSequence'
import {
  IQuestion,
  Country,
  QuizStatus,
  Difficulty,
  QuestionType
} from '../models'

interface QuizContextData {
  questions: IQuestion[]
  quizStatus: QuizStatus
  currentQuestion: number
  chooseDifficulty(difficulty: Difficulty): void
  checkAnswer(option: Country): boolean
  getNext(): void
  restartQuiz(): void
  score: number
  numQuestions: number
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData)

export const QuizProvider: React.FC = ({ children }) => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('standby')
  const [numQuestions, setNumQuestions] = useState(0)
  const [questions, setQuestions] = useState([] as IQuestion[])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const chooseDifficulty = useCallback(
    async ({ countries: countriesList, numQuestions }: Difficulty) => {
      const countries = await getCountries(countriesList)
      const questionTypes = getQuestionTypesSequence(numQuestions)
      const questionCountries = _.sampleSize(countries, numQuestions)

      const newQuestions = questionTypes.map((type: QuestionType, index) => {
        const correctAnswer = questionCountries[index]
        const alternatives = _.sampleSize(
          countries.filter(cty => cty.name !== questionCountries[index].name),
          3
        )

        const choices = _.shuffle([...alternatives, correctAnswer])
        return {
          type,
          choices,
          correctAnswer
        } as IQuestion
      })

      setNumQuestions(numQuestions)
      setQuestions(newQuestions)
      setQuizStatus('ongoing')
    },
    []
  )

  const checkAnswer = useCallback(
    (option: Country) => {
      const isAnswerCorrect =
        option === questions[currentQuestion].correctAnswer

      if (isAnswerCorrect) setScore(prev => prev + 1)

      return isAnswerCorrect
    },
    [currentQuestion, questions]
  )

  const getNext = useCallback(() => {
    currentQuestion + 1 === numQuestions
      ? setQuizStatus('end')
      : setCurrentQuestion(question => question + 1)
  }, [currentQuestion, numQuestions])

  const restartQuiz = useCallback(() => {
    setCurrentQuestion(0)
    setScore(0)
    setQuizStatus('standby')
  }, [])

  return (
    <QuizContext.Provider
      value={{
        questions,
        quizStatus,
        score,
        numQuestions,
        currentQuestion,
        chooseDifficulty,
        checkAnswer,
        getNext,
        restartQuiz
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
