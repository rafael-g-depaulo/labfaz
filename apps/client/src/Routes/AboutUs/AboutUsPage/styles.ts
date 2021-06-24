import styled from 'styled-components'
import mobileOnly from 'Utils/breakpoints/mobileOnly'

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 40%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 2em;
  min-height: 400px;
  max-height: 500px;
  max-width: 100%;
  line-height: var(--line-height);
  margin: 20px;

  ${
    mobileOnly(`
      margin: 5px;
    `)
  }
`

export const Image = styled.img`
  max-height: 400px;
  max-width: 789px;

  ${mobileOnly(
    `
    max-height: 100%;
    max-width: 100%;
    min-height: 200px;
    min-width: 300px;
    align-self: center;
    `
  )}
`
