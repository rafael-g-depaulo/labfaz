import styled from 'styled-components'

// TODO import image from 'Assets/image.jpg'

export const Container = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  /* TODO background-image: url() */
  background-color: #C4C4C425;
  
  div {
    width: 35rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    padding-top: 2rem;

    a {
      text-decoration: none;
      color: black;
      padding: 0.5rem 3rem;
      background-color: #C4C4C4;
    }

    h1 {
      font-size: 35px;
      line-height: 0;
      margin: 0;
    }
    h2 {
      font-size: 15px;
      font-weight: medium;
      margin: 0;
    }
  }
  
`;
