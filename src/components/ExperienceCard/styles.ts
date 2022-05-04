import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  background-color: var(--border);
  border-radius: 5px;
  margin-top: 1rem;
`

export const Content = styled.section`
  display: flex;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;

  strong {
    font-size: 1.7rem;
    color: var(--highlight);
  }

  p {
    font-size: 1.5rem;
    color: var(--white);
  }
`
