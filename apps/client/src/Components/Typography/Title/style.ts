import styled, { css } from 'styled-components'

import { TitleProps } from './';

const TitleFontVariation = {

  1: css`
    font-size: var(--font-size-title);
  `,

  2: css`
    font-size: var(--font-size-default);
  `,

  3: css`
    font-size: var(--font-size-large);
  `,
  
  4: css`
    font-size: var(--font-size-medium);
  `,
  
  5: css`
    font-size: var(--font-size-short);
  `,
};

export const StyledTitle = styled.h1<TitleProps>`
  ${(props) => TitleFontVariation[props.level || 1]};
  margin: 0;
  
  &.black {
    color: var(--color-text);  
  }

  &.white {
    color: var(--color-text-white);
  }

  &.yellow {
    color: var(--color-text-yellow);
  }

  &.pink {
    color: var(--color-text-pink);  
  }
`
