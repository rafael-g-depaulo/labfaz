import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Mobile, DesktopSmall } from 'Utils/breakpoints'

export interface Props {
  align: string
}

export const Container = styled.div<Props>`
  display: flex;
  padding: ${props => props.align === 'left' ? '0.5rem 0 0.5rem 7rem' : '0.5rem 0 4rem 0'};
  justify-content: ${props => props.align};
  background-color: var(--background-pink);
  
  div {
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: space-evenly;
    text-align: ${props => props.align};
    gap: 1rem;
  }
  ${Mobile(css`
    padding: 0.5rem 2.5rem;
  `)}
  
`;

export const Title = styled.h1`
  font-size: var(--font-size-title);
  font-weight: bold;
  color: var(--color-text-beige);
  margin: 0;

  ${DesktopSmall(css`
    font-size: var(--font-size-title-smaller);
  `)}
`;

export const Subtitle = styled.h2`
  color: var(--color-text-beige);
  margin: 0;

  ${DesktopSmall(css`
    font-size: var(--font-size-short);
  `)}
`;

export const KnowMoreButton = styled(Link)`
  text-decoration: none;
  color: var(--background-pink);
  padding: 0.2rem 3rem;
  background-color: var(--color-text-beige);
  box-shadow: -5px -5px var(--color-text-black);
  margin-top: 2.5rem;

  ${DesktopSmall(css`
    font-size: var(--font-size-short);
  `)}
`;
