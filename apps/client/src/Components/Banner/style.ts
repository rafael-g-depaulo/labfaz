import styled, { css } from 'styled-components'

import { Mobile, MobileSmall } from 'Utils/breakpoints'
import { InternalLinkButton  } from 'Components/Buttons/InternalLinkButton';
import { Title } from 'Components/Typography/Title'

export interface Props {
  align: string
  BgImage?: string
}

export const Container = styled.div<Props>`
  display: flex;
  padding: ${props => props.align === 'left' ? '0.5rem 0 0.5rem 7rem' : '0.5rem 0 4rem 0'};
  justify-content: ${props => props.align};
  background:
    ${props => props.BgImage && `url("${props.BgImage}")`}
    var(--background-pink)
  ;
  background-position: center;
  background-size: cover;
  
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
    max-height: 25rem;
  `)}

  ${MobileSmall(css`
    padding: 1rem 1.5rem;
    max-height: 22rem;
  `)}
  
`;

export const TitleBanner = styled(Title)`
  color: var(--color-text-beige);
  font-size: var(--font-size-title-xxxlarge);
  font-weight: bold;

  ${Mobile(css`
    font-size: var(--font-size-title-xxlarge);
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-title-xlarge);
  `)}

`;

export const Subtitle = styled(Title)`
  color: var(--color-text-beige);
  font-size: var(--font-size-title-smaller);
  font-weight: 600;

  ${Mobile(css`
    font-size: var(--font-size-default);
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const KnowMoreButton = styled(InternalLinkButton)`
  --font-size-short: 11px;

  color: var(--background-pink);
  padding: 0.2rem 3rem;
  background-color: var(--color-text-beige);
  margin: 2.5rem 0 2rem 0;
  font-weight: bold;

  &:hover {
    border-top: 3px solid;
    border-left: 3px solid;
    border-color: var(--background-black);
  }

  ${Mobile(css`
    font-size: var(--font-size-medium);
  `)}

  ${MobileSmall(css`
    padding: 0.2rem 1.5rem;
    font-size: var(--font-size-short);
  `)}

`;
