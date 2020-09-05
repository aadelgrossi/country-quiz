import styled from 'styled-components'

import bgImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 1000px;

  > h1 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  margin: 0 auto;
`
