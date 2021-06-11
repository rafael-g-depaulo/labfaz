import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 9rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    width: 100%;
    /* TODO */
    background-color: #C4C4C4;
  }
`
