import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .ContainerContent {
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media(min-width: 905px) and (max-width: 1250px) {
      width: 90%;
    }

    @media(min-width: 1250px) {
      width: 80%;
    }

    @media(min-width: 1920px) {
      width: 55%;
    }
  }

  
`

export const TextBlock = styled.div`
  width: 30rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  
  h1 {
    font-size: 30px;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 14px;
  }

  @media(min-width: 768px ) and (max-width: 1080px) {
    width: 20rem;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }
`
