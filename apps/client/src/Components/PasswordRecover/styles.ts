import styled from 'styled-components'

interface ModalProps {
  isVisible: boolean
}

export const Wrapper = styled.div<ModalProps>`
  max-width: 640px;
  max-height: 707px;
  min-height: 707px;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid black;
  filter: ${props => props.isVisible ? "blur(2.5px)" : ""};

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
    :hover {
      cursor: pointer;
    }
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
    color: black;
  }

  label {
    margin-bottom: 2rem;
  }

  p {
    max-width: 379px;
    text-align: center;
    margin-bottom: 9.7rem;
  }

  > div {
    color: red;
    font-weight: 600;
    font-size: var(--font-size-short);
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

  :disabled {
    opacity: 0.5;
  }
`

export const Blur = styled.div<ModalProps>`
  display: ${props => props.isVisible ? "grid" : "none"};
  position: fixed;
  top: 0;
  border: 1px solid black;
  min-width: 100vw;
  min-height: 100vh;
  place-items: center;
  z-index: 99999999;
`

export const ModalDiv = styled.div`
  display: flex;
  background-color: white;
  min-height: 500px;
  min-width: 300px;
`
