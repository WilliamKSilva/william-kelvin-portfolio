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
    font-weight: 700;
    text-align: center;
  }

  section {
    display: flex;
    width: 65%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: row;
    margin-top: 7rem;

    a {
      font-size: 1.7rem;
      cursor: pointer;
      text-decoration: underline;
      color: var(--white);
      font-weight: 700;
    }
  }
`
