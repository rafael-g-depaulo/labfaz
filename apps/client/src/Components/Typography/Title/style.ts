import styled from 'styled-components'

export const StyledTitle = styled.h1`
  margin: 0;
  color: var(--color-text-black);

  &.level-1 {
    font-size: var(--font-size-title);
  }

  &.level-2 {
    font-size: var(--font-size-title-medium);
  }

  &.level-3 {
    font-size: var(--font-size-title-small);
  }
  
  &.level-4 {
    font-size: var(--font-size-default);
  }
  
  &.level-5 {
    font-size: var(--font-size-large);
  }

  &.level-6 {
    font-size: var(--font-size-medium);
  }
`
