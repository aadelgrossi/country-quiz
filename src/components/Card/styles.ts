import styled from 'styled-components'
import questionIllustration from '../../assets/undraw_adventure_4hum_1.svg'

export const Container = styled.div`
  background: #fff;
  border-radius: 1.4rem;
  padding: 2rem 2rem;
  position: relative;
  width: min(400px, 70vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 1.2em;
    color: #2f527b;
    margin-bottom: 1.6em;
  }

  &::after {
    position: absolute;
    content: '';
    background-image: url(${questionIllustration});
    background-repeat: no-repeat;
    width: 200px;
    height: 125px;
    right: -38px;
    top: -78px;
  }

  button:last-of-type {
    align-self: flex-end;
    margin-top: 1em;
  }
`
