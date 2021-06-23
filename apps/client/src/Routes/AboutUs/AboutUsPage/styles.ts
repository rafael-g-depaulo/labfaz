import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80vw;
  height: 40%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const AboutComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  min-height: 400px;
  max-height: 500px;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`
