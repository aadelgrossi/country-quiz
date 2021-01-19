import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 1.2em;
    color: var(--color-question-title);
    margin-bottom: 1.6em;
  }

  > button:last-of-type {
    align-self: flex-end;
    margin-top: 1.5rem;
  }
`
