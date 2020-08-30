import styled, { css } from 'styled-components'

interface IChoiceProps {
  choiceType: string
}

export const Container = styled.button<IChoiceProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-shadow: inset 0px 0px 0px 2px rgba(96, 102, 208, 0.7);
  border-radius: 1rem;
  padding: 0.8rem 1.2rem;
  color: rgba(96, 102, 208, 0.8);
  transition: background-color 0.1s ease-in-out;
  font-size: 1.3rem;

  & + & {
    margin-top: 1em;
  }

  ${props =>
    props.choiceType === 'answer' &&
    css`
      span:first-of-type {
        font-size: 1.8rem;
        margin-right: 2rem;
      }
    `}

  ${props =>
    props.choiceType === 'difficulty' &&
    css`
      display: flex;
      align-items: center;
      justify-content: left;
      strong {
        text-align: left;
        width: 30%;
        margin-right: auto;
      }

      > span {
        font-size: 0.3em;
        color: #fff;
        background: rgba(96, 102, 208, 1);
        padding: 0.5em 1.5em;
        border-radius: 0.5rem;
      }

      > span + span {
        margin-left: 1em;
      }
    `}

  &:hover,
  &:focus {
    color: #fff;
    border: 0;
    background-color: #f9a826;
    box-shadow: none;
  }
`
