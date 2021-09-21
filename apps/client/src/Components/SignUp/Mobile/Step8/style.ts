import styled from 'styled-components'

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
  
  margin-top: 6.38rem;

  .radioLabel {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.72rem;
    font-size: var(--font-size-large);
  }
`
export const InputTextContainer = styled.div`
  margin-bottom: 3.5rem;
`
