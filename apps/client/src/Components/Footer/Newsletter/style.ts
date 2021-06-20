import styled from 'styled-components'

export const NewsletterContainer = styled.div`
@media (max-width: 768px){
    display: none;
  }
--font-size: 14px;
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: flex-start;
min-width: 400px;

span {
  font-weight: 500;
  text-transform: uppercase;
}

div {
  display: flex;
  margin: 16px 0;
  border: 1px solid black;
  background-color: #fff;

  input {
    font-family: inherit;
    border: none;
    border-right: 1px solid black;
    line-height: 32px;
    margin: 12px 0;
    padding-left: 16px;
    :focus {
      outline: none;
    }

  }

  button {
    background-color: #fff;
    padding: 22px;
    
    border: none;
    transition: all 0.6s;
    :hover {
      background-color: #f4f4f4;
    }
  }
}

`
