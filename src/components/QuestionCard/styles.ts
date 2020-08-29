import styled from 'styled-components'
import questionIllustration from '../../assets/undraw_adventure_4hum_1.svg'

export const Container = styled.div`
  background: #fff;
  border-radius: 1.4rem;
  padding: 4rem 2.2rem;
  position: relative;

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
`

export const Alternative = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-shadow: inset 0px 0px 0px 2px rgba(96, 102, 208, 0.7);
  border-radius: 0.9rem;
  padding: 0.8rem 1.2rem;
  color: rgba(96, 102, 208, 0.8);
  transition: background-color 0.1s ease-in-out;

  & + & {
    margin-top: 25px;
  }

  span:first-of-type {
    font-size: 1.8em;
    margin-right: 2rem;
  }

  span:nth-of-type(2) {
    font-size: 1.3em;
  }

  &:hover,
  &:focus {
    color: #fff;
    border: 0;
    background-color: #f9a826;
    box-shadow: none;
  }
`
