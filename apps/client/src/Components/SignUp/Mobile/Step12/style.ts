import styled from 'styled-components'

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
  height: 100vh;

  scroll-snap-align: start;
`

export const Content = styled.div`
  margin-top: 1.83rem;
`

export const LabelText = styled(Text)`
  margin-top: 2.13rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
  font-size: var(--font-size-large);
  color: #fafafa;
  position: relative;

  .obrigatory {
    color: red;
  }

  span {
    color: red;
    font-size: var(--font-size-small);
    position: absolute;
    left: 0;
    top: 1.2rem;
  }
`

export const InputRadioContainer = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-size: vaR(--font-size-medium);
    color: #fafafa;
  }
`

export const SelectContainer = styled.label`

  width: 13.3rem;
  display: block;
  margin-bottom: 1rem;

  label {
    font-weight: 600;
    font-size: var(--font-size-large);
    display: block;
    
    line-height: 1rem;

    margin-bottom: 1.2rem;
    color: #fafafa;
  }
`
