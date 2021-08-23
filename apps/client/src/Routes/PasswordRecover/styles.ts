import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100vw;
  max-height: 90vh;
  height: 90vh;
  display: grid;
  place-items: center;
`

export const PageTitle = styled.h1`
  font-size: var(--font-size-title-xxxlarge);
  justify-self: start;
  padding-left: calc(100vw - (1280px + 21.8vw));
`
