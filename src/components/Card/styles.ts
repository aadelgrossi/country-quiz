import styled, { css } from 'styled-components'

import questionIllustration from '../../assets/card_detail.svg'

interface CardProps {
  hasImage?: boolean
}

export const Container = styled.div<CardProps>`
  background: #fff;
  border-radius: 1.4rem;
  padding: min(10vh, 2rem) min(8vw, 1.5rem);
  position: relative;
  width: max(290px, 70vw);

  @media (min-width: 600px) {
    padding: 4rem 2rem 2rem;
    width: min(480px, 90vw);
  }

  ${props =>
    props.hasImage &&
    css`
      &::after {
        position: absolute;
        content: '';
        background-image: url(${questionIllustration});
        background-repeat: no-repeat;
        background-size: 100%;
        width: 38%;
        height: 37%;
        right: 0px;
        top: -80px;
      }
    `}
`
