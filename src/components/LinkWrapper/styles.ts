import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.4);
  }
`

export const Title = styled.strong`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white);
`
