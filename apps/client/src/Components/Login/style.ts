import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton'
import { Input } from 'Components/Input'
import styled from 'styled-components'

export const Container = styled.div`
`

export const FormContainer = styled.div`
  width: 47.6rem;
  height: 23.5rem;

  display: flex;
  margin-top: 2rem;
`

export const LeftSide = styled.div`
  width: 23.8rem;
  height: 23.5rem;
  background-color: #CECECE;
`

export const RightSide = styled.div`
  width: 23.8rem;
  height: 23.5rem;
  background-color: #E5E5E5;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3.17rem 4.8rem 4.16rem 3.17rem;

  .checkboxContainer {

    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    input {
      margin-right: 1.2rem;
    }

    label {
      font-weight: 600;
      font-size: var(--font-size-short);
    }
  }
`
export const Button = styled(InternalLinkButton)`
  border: 0;
  background-color: #FFFFFF;
  color: #000000;
  padding: 0.2rem 5rem;
  font-size: var(--font-size-small);
`

export const InputText = styled(Input)`
  label {
  }  
`

export const Form = styled.form`
`
