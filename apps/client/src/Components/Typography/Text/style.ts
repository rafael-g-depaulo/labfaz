import styled, { css } from 'styled-components'

interface TextProps {
  level?: 0 | 1 | 2 | 3 | 4
}
const TextFontVariation = {

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


export const StyledText = styled.p<TextProps>`
  ${(props) => TextFontVariation[props.level || 0]}
`
