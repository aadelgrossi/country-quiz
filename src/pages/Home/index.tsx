import React from 'react'

import Footer from '../../components/Footer'
import Quiz from '../../components/Quiz'
import Results from '../../components/Results'
import SelectDifficulty from '../../components/SelectDifficulty'

import { useQuiz } from '../../hooks/useQuiz'

import { Container, Contents } from './styles'

const Home: React.FC = () => {
  const { quizStatus } = useQuiz()

  return (
    <Container>
      <Contents>
        <h1>Country Quiz</h1>
        {quizStatus === 'standby' && <SelectDifficulty />}
        {quizStatus === 'ongoing' && <Quiz />}
        {quizStatus === 'end' && <Results />}
      </Contents>
      <Footer />
    </Container>
  )
}

export default Home
