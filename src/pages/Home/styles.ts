import styled from 'styled-components'

import bgImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 5vw;
  padding-top: 20vh;

  > h1 {
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 700px) {
    margin: 0 auto;
  }
`
