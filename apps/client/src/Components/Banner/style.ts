import styled, { css } from 'styled-components'

import { Mobile } from 'Utils/breakpoints'
import { InternalLinkButton  } from 'Components/Buttons/InternalLinkButton';
import { Title } from 'Components/Typography/Title'

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

export const TitleBanner = styled(Title)`
  color: var(--color-text-beige);
  font-size: var(--font-size-title);

  ${Mobile(css`
    font-size: var(--font-size-title);
  `)}

`;

export const Subtitle = styled(Title)`
  color: var(--color-text-beige);
`;

export const KnowMoreButton = styled(InternalLinkButton)`
  color: var(--background-pink);
  padding: 0.2rem 3rem;
  background-color: var(--color-text-beige);
  margin-top: 2.5rem;

  &:hover {
    border-top: 3px solid;
    border-left: 3px solid;
    border-color: var(--background-black);
  }

`;
