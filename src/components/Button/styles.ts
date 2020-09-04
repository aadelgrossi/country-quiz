import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'fill' | 'outline'
}
export const Container = styled.button<ButtonProps>`
  padding: 20px;
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
  min-width: 30%;
  width: fit-content;
  font-size: 1.2rem;

  background-color: ${props => (props.variant === 'fill' ? '#f9a826' : '')};
  color: ${props =>
    props.variant === 'fill' ? '#fff' : 'rgba(96, 102, 208, 0.7)'};

  ${props =>
    props.variant === 'outline' &&
    css`
      box-shadow: inset 0px 0px 0px 2px rgba(96, 102, 208, 0.7);
    `}
`
