import styled from 'styled-components'

import bgImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;

  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    text-transform: uppercase;
  }
`
