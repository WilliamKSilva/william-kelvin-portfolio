import styled from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  display: flex;
  margin-top: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5rem;

  span {
    font-size: 2rem;
    color: var(--secondary);
    padding-top: 1rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    color: var(--white);
    font-weight: 500;
    text-align: center;
    line-height: 2.5rem;

    a {
      font-size: 1.8rem;
      color: var(--highlight);
      text-decoration: underline;
    }
  }
`
