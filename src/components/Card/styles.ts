import styled, { css } from 'styled-components'

import questionIllustration from '../../assets/card_detail.svg'

interface CardProps {
  hasImage?: boolean
}

export const Container = styled.div<CardProps>`
  background: #fff;
  border-radius: 1.4rem;
  padding: 4rem 2rem 2rem;
  position: relative;
  min-height: 30vh;
  width: min(400px, 70vw);

  ${props =>
    props.hasImage &&
    css`
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
    `}
`
