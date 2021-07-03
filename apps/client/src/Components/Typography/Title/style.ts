import styled, { css } from 'styled-components'

interface TitleProps {
  level?: 0 | 1 | 2 | 3 | 4
  color?: 'white' | 'yellow' | 'black' | 'pink' 
}

const TitleFontVariation = {

  0: css`
    font-size: var(--font-size-default);
  `,

  1: css`
    font-size: var(--font-size-title);
  `,

  2: css`
    font-size: var(--font-size-large);
  `,
  
  3: css`
    font-size: var(--font-size-medium);
  `,
  
  4: css`
    font-size: var(--font-size-short);
  `,
};

const TitleColorVariation = {
  'white': css`
    color: var(--color-text-white);
  `,

  'yellow': css`
    color: var(--color-text-yellow);
  `,

  'black': css`
    color: var(--color-text);  
  `,

  'pink': css`
  color: var(--color-text-pink);  
  `
}

export const StyledTitle = styled.h1<TitleProps>`
  ${(props) => TitleFontVariation[props.level || 0]};
  ${(props) => TitleColorVariation[props.color || 'black']}
  margin: 0;
`
