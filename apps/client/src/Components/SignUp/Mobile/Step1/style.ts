import styled from 'styled-components'
import { TextInput } from 'Components/Inputs/TextInput'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`

  margin-top: 7.5rem;

  .socialNameInformation {
    div {
      display: flex;
      align-items: center;
      
      label {
        font-size: var(--font-size-large);
        display: block;

        margin-right: 0.5rem;
      }
    }

    svg {
      width: 15px;
      height: 15px;
      color: #6C6C6C;
    }

  }
`

export const InputText = styled(TextInput)``

export const InputTextContainer = styled.div`
  margin-bottom: 3.5rem;
`
