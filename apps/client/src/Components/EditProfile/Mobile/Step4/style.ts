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
  
  .radioLabel {
    display: block;
    position: relative;

    font-size: var(--font-size-large);
    font-weight: 600;

    color: #fafafa;

    margin-top: 1.2rem;
    margin-bottom: 1rem;

    .errorMessage {
      position: absolute;
      
      top: 1.3rem;
      left: 0;
      
      color: red;

      font-size: var(--font-size-small);
    }

    .obrigatory {
      color: red;
      display: inline;
    }
  
  }

  .otherGender {
    margin-top: 2rem;
  }
`

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
