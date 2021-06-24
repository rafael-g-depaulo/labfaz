import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 17rem;

  .ContainerContent {
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    max-width: 60rem;
  }
`

export const TextBlock = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`

export const TextTitle = styled.h1`
  font-size: 30px;
  margin: 0;
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: justify;
`

export const YoutubePlayerResponsive = styled.div`
  display: flex;
  align-items: end;
  div {
    height: 15rem;
    width: 30rem;
  }
`;
