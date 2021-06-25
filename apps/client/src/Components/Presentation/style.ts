import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 17rem;

  .ContainerContent {
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    width: 60rem;
    @media(max-width: 855px) {
      flex-direction: column;
      align-items: center;
      justify-content: none;
      max-width: 30rem;
    }
    @media (min-width: 856px) and (max-width: 959px) {
      width: 40rem;
    }
    @media(min-width: 960px) and (max-width: 1150px) {
      width: 50rem;
    }
  }
  @media(max-width: 855px) {
    height: auto;
  }
  @media(min-width: 856px) and (max-width: 959px) {
    height: 12rem;
  }
`

export const TextBlock = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 1rem;
  @media(max-width: 330px) {
    max-width: 17rem;
  }
`

export const TextTitle = styled.h1`
  font-size: 30px;
  margin: 0;
  @media(max-width: 855px) {
    text-align: center;
    margin: 0 0 1rem 0;
  }
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
    @media(max-width: 374px) {
      max-width: 17rem;
    }
    @media(min-width: 375px) and (max-width: 459px) {
      max-width: 20rem;
      padding: 0 1rem;
    }
    @media(min-width: 460px) and (max-width: 529px) {
      max-width: 25rem;
      padding: 0 1rem;
    }

    @media(min-width: 530px) and (max-width: 855px) {
      min-width: 20rem;
      padding: 0 1rem;
    }

    @media(min-width: 856px) and (max-width: 959px) {
      width: 20rem;
      height: 10rem;
    }
    @media(min-width: 960px) and (max-width: 1150px){
      width: 25rem;
    }
  }
`;
