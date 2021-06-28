import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 9rem;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: var(--font-size-title);
  margin: 0;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  width: 100%;
  /* TODO */
  background-color: var(--background-dark-gray);
`

export const Image = styled.img`
  height: 4rem;
  object-fit: cover;
`
