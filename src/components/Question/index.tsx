import React, { useCallback, useState } from 'react'

import classnames from 'classnames'

import Card from '../Card'
import Choice from '../Choice'
import { IQuestion, Country } from '../../models'

import { formatQuestionFromType } from '../../utils/formatQuestionFromType'
import { useQuiz } from '../../hooks/useQuiz'
import Button from '../Button'

interface QuestionProps {
  data: IQuestion
}

const Question: React.FC<QuestionProps> = ({ data }) => {
  const [answerStatus, setAnswerStatus] = useState('')
  const [selectedAlternative, setSelectedAlternative] = useState('')
  const { checkAnswer } = useQuiz()

  const handleOptionClick = useCallback(
    (option: Country, alternative: string) => {
      const isAnswerCorrect = checkAnswer(option)

      isAnswerCorrect ? setAnswerStatus('correct') : setAnswerStatus('error')
      setSelectedAlternative(alternative)
    },
    [checkAnswer]
  )

  return (
    <Card>
      <h2>{formatQuestionFromType(data.type, data.correctAnswer)}</h2>

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

      {selectedAlternative && <Button>Next</Button>}
    </Card>
  )
}

export default Question
