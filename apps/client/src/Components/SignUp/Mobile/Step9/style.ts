import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

`
export const ContentContainer = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;

  scroll-snap-align: start;
`

export const Content = styled.div`
  
  margin-top: 7.2rem;

  .radioLabel {
    font-weight: 600;
    display: block;
    margin-bottom: 1rem;
    font-size: var(--font-size-medium);

    color: #fafafa;
  }
`

export const InputRadioContainer = styled.div`
  margin-bottom: 1.61rem;
`

export const SelectContainer = styled.label`

  width: 13.3rem;
  display: block;
  margin-bottom: 2rem;
`
export const InputTextContainer = styled.div`
  margin-top: 1rem;
`
