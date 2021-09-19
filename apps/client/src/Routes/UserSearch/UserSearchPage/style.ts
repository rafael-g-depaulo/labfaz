import styled from 'styled-components'

interface LabelProps {
  isFocused?: boolean
}

export const FormDiv = styled.div`
  margin-top: 5rem;
  height: 90vh;
  width: 100vw;
  background-color: black;

  form {
    margin-left: 6.5rem;
  }
`

export const OptionsDiv = styled.div`
  max-height: 220px;
  max-width: 70vw;
  display: flex;
  flex-direction: column;
`

export const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  
  * {
    color: white
  }

  h4 {
    margin-right: 2.6rem;
  }
`

export const Label = styled.div<LabelProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  max-height: 20px;
  max-width: fit-content;
  padding: 0.5em;
  margin: 0 14.5px;

  background-color: rgba(31, 31, 31, 1);
  border-radius: 7px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  

  p {
    font-size: var(--font-size-short)
  }

  :hover {
    cursor: pointer;
    background-color: rgba(252, 0, 97, 1);
    transition: 400ms;
  }

  :active {
    background-color: rgba(252, 0, 97, 1);
  }
`
