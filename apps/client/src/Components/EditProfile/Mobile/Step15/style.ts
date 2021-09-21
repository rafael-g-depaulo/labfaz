import styled from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { TextInput } from 'Components/Inputs/TextInput'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;


  width: 100vw;

  scroll-snap-align: start;

  svg {
    color: #A3A3A3;
    position: absolute;
    bottom: 10rem;

    left: 50%;
    transform: translateX(-50%);

    width: 35px;
    height: 35px;

    animation: MoveUpDown 2s linear infinite;
  }

  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
  }
`



export const Content = styled.div`
  margin-top: 6.02rem;
  
  width: 13.3rem;
`

export const LabelText = styled(Text)`
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: var(--font-size-large);
  color: #fafafa;

  position: relative;

  .errorMessage {
    color: red;
    position: absolute;
    top: 1.2rem;
    left: 0;

    font-size: var(--font-size-small);
  }

  .obrigatory {
    display: inline;
    color: red;
  }
`

export const InputRadioContainer = styled.div`
  margin-bottom: 0.5rem;
`

export const TextContainer = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 2rem;

`

export const CnpjTextContainer = styled.div`
  margin-top: 1.79rem;
`

export const CnpjContainer = styled.div`
  scroll-snap-align: start;
`

export const CpnjContent = styled.div`
  margin-top: 5rem;
  width: 13.3rem;
`

export const InputText = styled(TextInput)``
