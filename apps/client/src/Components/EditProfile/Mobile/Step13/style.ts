import styled from 'styled-components'

import { Field } from 'formik'
import { Text } from 'Components/Typography/Text'

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
  width: 14.4rem;

`

export const TextLabel = styled(Text)`
  font-size: var(--font-size-medium);
  font-weight: 600;
  line-height: 16px;

  margin-top: 2.44rem;

  display: block;

  color: #fafafa;

  position: relative;

  .errorMessage {
    position: absolute;
    color: red;
    font-size: var(--font-size-small);
    
    left: 0;
    top: 1.7rem;
  }

  .obrigatory {
    color: red;
    display: inline;
  }
`

export const InputText = styled(Field)`
  width: 14.4rem;
  height: 15.6rem;

  margin-top: 1.66rem;
  resize: none;
`

export const FileContainer = styled.div`
  margin-top: 2.83rem;
  width: 14.4rem;


  input {
    width: 100%;
  }
`
