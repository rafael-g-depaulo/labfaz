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
  
  scroll-snap-align: start;
`

export const Content = styled.div`
 margin-top: 8rem;

  div {
    display: flex;
    column-gap: 1.27rem;
  }

  label {
    font-size: var(--font-size-medium);
  }
`

export const InputText = styled(TextInput)``

export const InputTextContainer = styled.div`
  margin-bottom: 3rem;
`
