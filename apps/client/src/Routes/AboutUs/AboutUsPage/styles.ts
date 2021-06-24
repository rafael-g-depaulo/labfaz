import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 40%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  min-height: 400px;
  max-height: 500px;
  line-height: var(--line-height);
  margin: 20px;
`

export const Image = styled.img`
  max-height: 400px;
  max-width: 789px;
`
