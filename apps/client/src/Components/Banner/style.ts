import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Mobile } from 'Utils/breakpoints'

// TODO import image from 'Assets/image.jpg'

export interface Props {
  align: string
}

export const Container = styled.div<Props>`
  display: flex;
  padding: ${props => props.align === 'left' ? '0.5rem 0 0.5rem 7rem' : '0.5rem 0'};
  justify-content: ${props => props.align};
  /* TODO background-image: url() */
  background-color: var(--background-light-gray);
  
  div {
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: space-evenly;
    text-align: ${props => props.align};
    gap: 1rem;
  }
  ${Mobile('padding: 0.5rem 2.5rem')};
  
`;

export const Title = styled.h1`
  font-size: var(--font-size-title);
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: var(--font-size-medium);
  margin: 0;
`;

export const KnowMoreButton = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
  padding: 0.5rem 3rem;
  background-color: var(--background-dark-gray);
  margin-top: 1.5rem;
`;
