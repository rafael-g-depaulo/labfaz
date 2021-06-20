import styled from 'styled-components'

export const ContactContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
min-width: 200px;
--font-size: 14px;
font-weight: 500;
> span {
  text-transform: uppercase;
}

ul {
  list-style: none;
  margin: 16px 0;
  padding: 0;
  li {
    display: flex;
    justify-content: center;
  }
}

@media(min-width: 768px){
align-items: flex-start;
ul {
  list-style: none;
  margin: 16px 0;
  padding: 0;

  li {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 16px;
    }
  }
   
}
}

`
