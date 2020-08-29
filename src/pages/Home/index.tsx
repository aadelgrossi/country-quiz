import React from 'react'

import { Container, Contents } from './styles'
import Footer from '../../components/Footer'
import QuestionCard from '../../components/QuestionCard'

const Home: React.FC = () => (
  <Container>
    <Contents>
      <h1>Country Quiz</h1>
      <QuestionCard />
    </Contents>
    <Footer />
  </Container>
)

export default Home
