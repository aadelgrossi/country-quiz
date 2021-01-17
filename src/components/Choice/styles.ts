import styled, { css } from 'styled-components'

interface IChoiceProps {
  choiceType: string
  className?: string
}

export const Container = styled.button<IChoiceProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-shadow: inset 0px 0px 0px 2px rgba(96, 102, 208, 0.7);
  border-radius: 1rem;
  padding: 1.2rem;
  color: rgba(96, 102, 208, 0.8);
  transition: background-color 0.1s ease-in-out;
  font-size: 1.2em;

  & + & {
    margin-top: 1em;
  }

  ${props =>
    props.choiceType === 'answer' &&
    css`
      span:first-of-type {
        font-size: 1.2em;
        margin-right: 2rem;
      }

      > span:nth-of-type(2) {
        font-size: min(1em, 3.5vw);
      }

      > svg {
        color: #fff;
        margin-left: auto;
        border: 2px solid #fff;
        padding: 2px;
        border-radius: 50%;
      }

      &.answered {
        pointer-events: none;
      }

      &.error,
      &.success {
        box-shadow: unset;
        > span {
          color: #fff;
        }
      }

      &.answered.error {
        background-color: #ea8282;
      }

      &.answered.success {
        background-color: #60bf88;
      }
    `}

  ${props =>
    props.choiceType === 'difficulty' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 520px) {
        flex-direction: row;
        justify-content: left;

        strong {
          margin-right: auto;
          text-align: left;
        }
      }

      strong {
        width: 30%;
        font-size: min(1em, 4vw);
        text-transform: capitalize;
      }

      div {
        > span {
          font-size: min(0.9em, 2.5vw);
          color: #fff;
          background: var(--color-secondary);
          padding: 0.5em 1.5em;
          border-radius: 0.5rem;
          white-space: nowrap;
        }

        > span + span {
          margin-left: 1em;
        }
      }
    `}


  &:hover {
    color: #fff;
    border: 0;
    background-color: var(--color-primary);
    box-shadow: none;
  }
`
