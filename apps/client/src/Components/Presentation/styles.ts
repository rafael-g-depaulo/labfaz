import styled, { css } from 'styled-components'
import { DesktopSmall, Mobile } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .ContainerContent {
    display: flex;
    justify-content: space-around;
    height: 17rem;
    gap: 3rem;
    ${
      Mobile(css`
        flex-direction: column;
        align-items: center;
        justify-content: none;
        gap: 0;
      `)
    }
    /*
      '   max-width: 30rem'
    )};
    'width: 40rem')};
    'width: 50rem')}; */
  }
  /* 'height: auto')};
  'height: 12rem')}; */
`

export const TextBlock = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 0 1rem;
  /* 'max-width: 17rem')}; */
`

export const TextTitle = styled.h1`
  font-size: var(--font-size-title-medium);
  margin: 0;
  /* 'text-align: center; margin: 0 0 1rem 0')}; */
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: var(--font-size-medium);
  text-align: justify;
`

export const YoutubePlayerResponsive = styled.div`
  display: flex;
  padding-top: 2rem;
  div {
    width: 30em;

    ${DesktopSmall(css`
      width: 20em;
    `)}
    ${Mobile(css`
      width: 10em;
    `)}
    
    /* 'max-width: 17rem')};
    'max-width: 20rem; padding: 0 1rem')};
    'max-width: 25rem; padding: 0 1rem')}
    'min-width: 20rem; padding: 0 1rem')};
    'width: 20rem; height: 10rem')};
    'width: 25rem;')} */
    
  }
`;
