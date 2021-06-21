import styled from 'styled-components'

// TODO import image from 'Assets/image.jpg'

export interface ContainerProps {
  align: string
  height: number
}

export const Container = styled.div<ContainerProps>`
  height: ${props => props.height}rem;
  display: flex;
  padding: ${props => props.align === 'left' ? '0.5rem 7rem' : '0.5rem 2rem'};
  justify-content: ${props => props.align};
  /* TODO background-image: url() */
  background-color: #C4C4C425;
  
  div {
    width: 35rem;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content: space-evenly;
    text-align: ${props => props.align};
    a {
      text-decoration: none;
      color: black;
      padding: 0.5rem 3rem;
      background-color: #C4C4C4;
    }
    h1 {
      font-size: 35px;
      line-height: 0;
      margin: ${props => props.align === 'left' ? '2rem 0' : 0};
    }
    h2 {
      font-size: 15px;
      font-weight: medium;
      margin: 0;
    }
    @media(max-width: 660px) {
      padding: 0 2rem;
    }
  }
  
`;
