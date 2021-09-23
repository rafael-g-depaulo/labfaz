import styled from 'styled-components'

interface LabelProps {
  isFocused?: boolean
}

interface BadgeProps {
  isChecked?: boolean
}

export const FormDiv = styled.div`
  margin-top: 5rem;
  max-height: 90vh;
  max-width: 100vw;
  background-color: black;
  margin-left: 6.4rem;
`

export const OptionsDiv = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  > div:nth-child(2) {
    margin-top: 1rem;
  }
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


export const Select = styled.select`
  border: 1px solid gray;
  background: transparent;
  border-radius: 4px;
  display: flex;
  text-align: center;


  ::placeholder {
    color: white;
    font-size: var(--font-size-short)
  }
`

export const SelectDiv = styled.div`
  display: flex;
  margin-top: 4rem;
  * {
    color: white;
  }

  h4 {
    margin-right: 2.6rem;
  }
`

export const BadgeInput = styled.input`

  opacity: 1;
  float: left;
  width: 18px;
`

export const BadgeDiv = styled.div<BadgeProps>`
  display: flex;
  cursor: pointer;
  position: relative;
  margin: 1rem 1rem;
  justify-content: center;

  border: 1px solid gray;
  border-radius: 8px;
  background-color: ${props => props.isChecked ? 'rgba(252, 0, 97, 1)' : 'gray'};
  min-width: 65px;
  min-height: 20px;

  p {
    font-size: var(--font-size-short);
    padding: 0 0.5em;
  }

  input {
    opacity: 0;
    position: absolute;
    margin: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`

export const Presentation = styled.div`
  display: flex;
  min-height: 30vh;
  min-width: 100vw;
`
