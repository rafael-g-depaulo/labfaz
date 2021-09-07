import styled, { css } from 'styled-components'
import { DesktopSmall, Mobile } from "Utils/breakpoints"


export const Container = styled.div`
  min-width: 100vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: black;

  ${DesktopSmall(css`
    max-height: 100vh;
    min-height: 90vh;
  `)}

  ${Mobile(css`
    max-height: 100vh;
  `)}
`

export const Span = styled.p`
  font-size: var(--font-size-title-small);
  font-weight: 700;
  margin-top: 0;
  padding-top: 2.1em;
  padding-bottom: 5.25em;
  text-align: center;
  color: rgba(252, 0, 97, 1);
  background-color: black;

  ${DesktopSmall(css`
    display: none;
  `)}

  ${Mobile(css`
    display: none;
  `)}
`
