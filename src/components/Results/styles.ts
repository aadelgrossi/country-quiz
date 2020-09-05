import styled from 'styled-components'

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-bottom: 72px;
  }

  h1 {
    font-size: 2em;
    color: var(--color-secondary-title);
  }

  strong {
    font-size: 1.5em;
  }

  > span {
    color: var(--color-secondary-title);
    margin-bottom: 4rem;
  }
`
