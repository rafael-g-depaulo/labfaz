import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 640px;
  max-height: 707px;
  min-height: 707px;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid black;

  form {
    min-height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 7.8rem;
  }

  p:nth-child(3) {
    margin-top: 2rem;
    align-self: center;
    text-decoration: underline;
  }

  a {
    text-align: center;
  }
`;


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 136px;


  input {
    min-width: 379px;
    min-height: 51px;
    margin-bottom: 0.9rem;
  }

  label {
    margin-bottom: 2rem;
  }

  p {
    max-width: 379px;
    text-align: center;
    margin-bottom: 9.7rem;
  }
`
export const FormButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0.5rem 2rem;
  text-decoration: none;
  font-weight: bold;

  color: var(--color-text-yellow);
  background-color: var(--button-color-pink);

  border-top: 2px solid;
  border-left: 2px solid;
  border-color: var(--button-color-yellow);
`
