import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentContainer = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  scroll-snap-align: start;
`

export const Content = styled.div`
  
  margin-top: 6.38rem;

  .radioLabel {
    display: block;

    font-size: var(--font-size-large);
    font-weight: 600;

    margin-bottom: 1.44rem;
  
    color: #fafafa;

    position: relative;

    .errorMessage {
      position: absolute;
      left: 0;
      top: 1.5rem;
      color: red;
      
      font-size: var(--font-size-small);
    }

    .obrigatory {
      display: inline;
      color: red;
    }
  }
`

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 1.38rem;
`
