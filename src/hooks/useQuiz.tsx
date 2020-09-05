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
  isFinished(): boolean
  numQuestions: number
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData)

export const QuizProvider: React.FC = ({ children }) => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('standby')
  const [numQuestions, setNumQuestions] = useState(0)
  const [questions, setQuestions] = useState([] as IQuestion[])
  const [countries, setCountries] = useState([] as Country[])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const buildQuestions = useCallback(() => {
    const questionTypes = getQuestionTypesSequence(numQuestions)

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

  const checkAnswer = useCallback(
    (option: Country) => {
      return option === questions[currentQuestion].correctAnswer
    },
    [currentQuestion, questions]
  )

  const isFinished = useCallback(() => {
    return currentQuestion + 1 === numQuestions
  }, [currentQuestion, numQuestions])

  const getNext = useCallback(() => {
    setCurrentQuestion(question => question + 1)

    if (isFinished()) {
      setQuizStatus('end')
    }
  }, [isFinished])

  const chooseDifficulty = useCallback(
    async ({ countries, numQuestions }: Difficulty) => {
      const data = await getCountries(countries)

      setNumQuestions(numQuestions)
      setCountries(data)
      setQuizStatus('ongoing')
    },
    []
  )

  useEffect(() => {
    buildQuestions()
  }, [countries, buildQuestions])

  return (
    <QuizContext.Provider
      value={{
        questions,
        quizStatus,
        chooseDifficulty,
        checkAnswer,
        getNext,
        isFinished,
        numQuestions,
        currentQuestion
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
