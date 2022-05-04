import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--border);
`

export const Content = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--highlight);
  font-family: var(--font-logo);
`
