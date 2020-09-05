import React from 'react'
import { Country, QuestionType } from '../models'

export const formatQuestionFromType = (
  type: QuestionType,
  country: Country
): JSX.Element => {
  switch (type) {
    case 'capital':
      return <h2>{country.capital} is the capital of</h2>
    case 'flag':
      return (
        <>
          <img
            src={country.flag}
            style={{
              width: '84px',
              filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1))'
            }}
          ></img>
          <h2 style={{ marginTop: '28px' }}>
            Which country does this flag belong to?
          </h2>
        </>
      )
    default:
      return <></>
  }
}
