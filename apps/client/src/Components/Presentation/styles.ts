import styled, { css } from 'styled-components'
import { DesktopSmall, Mobile, MobileSmall, DesktopLarge } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-black);
  padding: 2rem;
  .ContainerContent {
    display: flex;
    justify-content: space-around;
    height: 18rem;
    gap: 3rem;
    padding: 2rem 0 0 0;
    ${
      Mobile(css`
        flex-direction: column;
        align-items: center;
        justify-content: none;
        gap: 0;
      `)
    }
  }
`

export const Line = styled.div`
  background-color: var(--background-dark-pink);
  height: 1px;
  width: 15rem;
  ${DesktopLarge(css`
    width: 20rem;
  `)}
`

export const TextBlock = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  ${
    Mobile(css`
      padding: 0 1rem;
    `)
  }
`

export const TextTitle = styled.h1`
  font-size: var(--font-size-title-medium);
  margin: 0;
  color: var(--color-text-beige);
  ${Mobile(css`
    text-align: center;
    margin: 0 0 1rem 0;
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-title-small);
  `)}
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: var(--font-size-medium);
  text-align: justify;
  color: var(--color-text-white);
`

export const YoutubePlayerResponsive = styled.div`
  display: flex;
  padding-top: 2rem;
  // review units later
  div {
    width: 30em;

    ${DesktopSmall(css`
      width: 20em;
    `)}

    ${Mobile(css`
      width: 18em;
      height: 12em;
    `)}

    ${MobileSmall(css`
      width: 16em;
    `)}
    
  }
  ${Mobile(css`
    padding: 0;
  `)}
`;
