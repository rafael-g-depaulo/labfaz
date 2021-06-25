import styled from 'styled-components'
import {
  ScreenMobileShort,
  ScreenMobileMedium,
  ScreenMobileLarge,
  ScreenMobileSmaller
} from 'Utils/breakpoints/mobileOnly'
import {
  PlayerShortWebScreen,
  PlayerMediumWebScreen,
  PlayerLargeWebScreen,
  PlayerSmallerWebScreen
} from 'Utils/breakpoints/webOnly'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 17rem;
  
  .ContainerContent {
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    width: 60rem;

    ${PlayerShortWebScreen(
      'flex-direction: column; align-items: center; justify-content: none; max-width: 30rem'
    )};
    ${PlayerMediumWebScreen('width: 40rem')};
    ${PlayerLargeWebScreen('width: 50rem')};
  }

  ${PlayerShortWebScreen('height: auto')};
  ${PlayerMediumWebScreen('height: 12rem')};
`

export const TextBlock = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 0 1rem;

  ${ScreenMobileSmaller('max-width: 17rem')};
`

export const TextTitle = styled.h1`
  font-size: var(--font-size-title-small);
  margin: 0;

  ${PlayerShortWebScreen('text-align: center; margin: 0 0 1rem 0')};
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: var(--font-size-medium);
  text-align: justify;
`

export const YoutubePlayerResponsive = styled.div`
  display: flex;
  align-items: end;
  div {
    height: 15rem;
    width: 30rem;

    ${ScreenMobileShort('max-width: 17rem')};
    ${ScreenMobileMedium('max-width: 20rem; padding: 0 1rem')};
    ${ScreenMobileLarge('max-width: 25rem; padding: 0 1rem')}

    ${PlayerSmallerWebScreen('min-width: 20rem; padding: 0 1rem')};
    ${PlayerMediumWebScreen('width: 20rem; height: 10rem')};
    ${PlayerLargeWebScreen('width: 25rem;')}
    
  }
`;
