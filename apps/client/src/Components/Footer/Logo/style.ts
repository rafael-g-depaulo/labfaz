import styled from 'styled-components'

export const LogoContainer = styled.div`
--font-size: 14px;
display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 768px){

align-items: flex-start;
min-width: 200px;
}

> img {
  height:100px;
  width: 150px;
}

span {
  text-transform: uppercase;
  font-weight: 500;
  line-height: 10px;
  margin: 16px 0;
}

div {
  a {
    margin-right: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}

`
