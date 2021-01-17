import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'fill' | 'outline'
}
export const Container = styled.button<ButtonProps>`
  padding: 20px;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5em;
  min-width: 30%;
  font-size: 1em;
  font-weight: 600;

  > span {
    white-space: nowrap;
  }

  background-color: ${props => (props.variant === 'fill' ? '#f9a826' : '')};
  color: ${props =>
    props.variant === 'fill' ? '#fff' : 'var(--color-secondary-title)'};

  ${props =>
    props.variant === 'outline' &&
    css`
      box-shadow: inset 0px 0px 0px 2px var(--color-secondary-title);
    `}
`
