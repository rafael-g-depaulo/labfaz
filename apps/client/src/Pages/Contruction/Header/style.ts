import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Icon = styled(Link)`
  color: var(--background-pink);
  background-color: transparent;
  text-decoration: none;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.2rem;
  }
`;
