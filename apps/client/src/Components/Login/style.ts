import styled from 'styled-components'

import { Input } from 'Components/Input'
import { Link } from 'react-router-dom'

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
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightSide = styled.div`
  width: 23.8rem;
  height: 23.5rem;
  background-color: #E5E5E5;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4rem 4.8rem 4.16rem 3.17rem;

  .checkboxContainer {

    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    input {
      margin-right: 1.2rem;
    }
  }
`
export const Button = styled.button`
  border: 0;
  background-color: #FFFFFF;
  color: #000000;
  padding: 0.2rem 5.68rem;
  cursor: pointer;
 
  font-size: var(--font-size-medium);
  font-weight: 600;
`

export const InputText = styled(Input)`

  input[type="text"], input[type="password"] {
    width: 14.1rem;
    height: 1.85rem;
    font-size: var(--font-size-medium);
    
    &::placeholder {
      font-size: var(--font-size-medium);
    }
  }

  label {
    font-size: var(--font-size-medium);
  }
`

export const InputCheckBox = styled(Input)`
  display: flex;
  flex-direction: row;

  input[type="checkbox"] {
    margin-right: 1.2rem;
  }

  label {
    font-size: 10px;
  }
`

export const Form = styled.form``

export const NavLink = styled(Link)`
  font-size: var(--font-size-short);
  font-weight: 600;

  display: flex;
  justify-content: center;

  margin-top: 1.2rem;
`
