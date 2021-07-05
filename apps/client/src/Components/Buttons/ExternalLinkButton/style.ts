import styled from 'styled-components'

export const StyledButton = styled.a`

  cursor: pointer;
  border: 0;
  padding: 0.5rem 2rem;
  text-decoration: none;
  border-top: 2px solid;
  border-left: 2px solid;

  &.primary {
    background-color: var(--button-color-pink);
    /* TODO border-radius: ; */
    /* TODO color: ; */
    color: var(--color-text-yellow);
    border-color: var(--button-color-yellow);
    /* $ {ShortScreen('font-size: var(--font-size-short); padding: 0.5rem 1rem')}; */
    /* $ {MediumScreen('font-size: var(--font-size-medium)')}; */
    /* $ {LargeScreen('font-size: var(--font-size-large)')}; */
  }

  &.secondary {
    color: var(--color-text-pink);
    background-color: var(--button-color-yellow);
    border-color: black;
    padding: 0.5rem 3rem;


    &-1 {
      color: var(--color-text-pink);
      background-color: var(--button-color-yellow);
      padding: 0.5rem 3rem;
      border-color: var(--button-color-pink);
    }
  }
`
