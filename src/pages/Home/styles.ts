import styled from 'styled-components'

import bgImg from '../../assets/background.png'

export const Container = styled.div`
  min-height: 100vh;

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
  margin: auto 2rem 0;
  align-self: center;

  > h1 {
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 400px) {
    margin: 180px auto 100px;
  }
`
