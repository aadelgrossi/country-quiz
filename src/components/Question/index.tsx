import React, { useCallback, useState } from 'react'

import classnames from 'classnames'

import Choice from '../Choice'
import { IQuestion, Country } from '../../models'

import { formatQuestionFromType } from '../../utils/formatQuestionFromType'
import { useQuiz } from '../../hooks/useQuiz'
import Button from '../Button'

import { Container } from './styles'

interface QuestionProps {
  data: IQuestion
}

type AnswerStatus = 'success' | 'error' | ''

const Question: React.FC<QuestionProps> = ({ data }) => {
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('')
  const [selectedAlternative, setSelectedAlternative] = useState('')
  const { checkAnswer, getNext, numQuestions, currentQuestion } = useQuiz()

  const handleOptionClick = useCallback(
    (option: Country, alternative: string) => {
      const isAnswerCorrect = checkAnswer(option)

      isAnswerCorrect ? setAnswerStatus('success') : setAnswerStatus('error')
      setSelectedAlternative(alternative)
    },
    [checkAnswer]
  )

  const handleNextQuestion = useCallback(() => {
    setAnswerStatus('')
    setSelectedAlternative('')
    getNext()
  }, [getNext])

  return (
    <Container>
      {formatQuestionFromType(data.type, data.correctAnswer)}

      {['A', 'B', 'C', 'D'].map((questionAlternative, index) => {
        const classes = classnames({
          [`${answerStatus}`]: selectedAlternative === questionAlternative,
          answered: selectedAlternative
        })

        return (
          <Choice
            key={questionAlternative}
            clickAction={() =>
              handleOptionClick(data.choices[index], questionAlternative)
            }
            className={classes}
          >
            <span>{questionAlternative}</span>
            <span>{data.choices[index].name}</span>
          </Choice>
        )
      })}

      {selectedAlternative && (
        <Button onClick={handleNextQuestion}>
          {currentQuestion + 1 === numQuestions ? 'Get results' : 'Next'}
        </Button>
      )}
    </Container>
  )
}

export default Question
