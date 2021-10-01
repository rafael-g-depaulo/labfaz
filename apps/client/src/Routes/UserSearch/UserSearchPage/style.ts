import styled, { css } from 'styled-components'
import { DesktopLarge, DesktopSmall, Mobile } from 'Utils/breakpoints'


export const FormDiv = styled.div`
  max-width: var(--max-content-small);
  margin: 1.6rem auto 2.4rem auto;
  background-color: black;

  ${Mobile(css`
    margin: 0;
    padding-top: 1em;
    padding-left: 1em;
    margin-bottom: 2rem;
  `)}
`

export const OptionsDiv = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: space-between;
  > div:nth-child(2) {
    margin-top: 1rem;
    margin-bottom: 0.5rem
  }

  > div:first-child {
    margin-bottom: 0.5rem
  }

  ${Mobile(css`
    > div:first-child {
      margin-top: 2rem;
    } 
  `)}

  ${DesktopLarge(css`
    min-height: 35vh;
  `)}

  ${DesktopSmall(css`
    min-height: 400px;
  `)}
`

export const OptionWrapper = styled.div`
  display: flex;

  span:first-child {
    margin-left: 0;
  }
`

export const OptionDiv = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  max-height: min-content;
  align-items: center;
  
  * {
    color: white
  }

  h4 {
    margin-right: 2.6rem;
  }

  ${Mobile(css`
    grid-template-columns: auto;
    justify-content: flex-start;
    margin-bottom: 0.5rem;

    label:first-child {
      margin-left: 0;
    }
`)}
`

export const Label = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  max-height: 20px;
  max-width: fit-content;
  padding: 0.5em;
  margin: 0 14.5px;

  background-color: rgba(31, 31, 31, 1);
  border-radius: 7px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  

  p {
    font-size: var(--font-size-short)
  }

  :hover {
    cursor: pointer;
    background-color: rgba(252, 0, 97, 1);
    transition: 400ms;
  }

  :active {
    background-color: rgba(252, 0, 97, 1);
  }
`


export const Select = styled.select`
  border: 1px solid gray;
  background: black;
  border-radius: 4px;
  display: flex;
  text-align: center;
  padding-right: 0.5em;
  max-width: 275px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  ::placeholder {
    color: white;
    font-size: var(--font-size-short)
  }

  ${Mobile(css`
    min-width: 275px;
    max-width: 100%;
  `)}
`

export const SelectDiv = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  margin-top: 1.6rem;
  position: relative;
  align-items: end;
  * {
    color: white;
  }

  h4 {
    margin-right: 2.6rem;
  }

  ${Mobile(css`
    grid-template-columns: auto;
    margin-bottom: 1em;
  `)}
`

export const BadgeInput = styled.input`

  opacity: 1;
  float: left;
  width: 18px;
`

export const BadgeDiv = styled.span`
  display: flex;
  cursor: pointer;
  position: relative;
  margin: 1rem;
  justify-content: center;

  border-radius: 8px;
  background-color: rgba(31, 31, 31, 1);
  min-width: 65px;
  min-height: 20px;
  max-height: min-content;
  max-width: auto;
  overflow: hidden;
  font-size: var(--font-size-short);
  
  label {
    font-size: var(--font-size-short);
    padding: 0 0.5em;
    pointer-events: none;
    z-index: 1;
  }

  input[type="checkbox"] {
    position: absolute;
    margin: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    appearance: none;
    transition: 300ms;

    :checked {
      background-color: rgba(252, 0, 97, 1);
    }
  }


  input[type="radio"] {
    position: absolute;
    margin: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    appearance: none;
    transition: 300ms;

    :checked {
      background-color: rgba(252, 0, 97, 1);
    }
  }

  ${Mobile(css`
    margin: 0.5rem
  `)}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-content-small);
  align-self: center;
  align-items: center;

  ${Mobile(css`
    width: 90vw
  `)}

  ${DesktopSmall(css`
    min-height: 0;
    margin-bottom: 20px;
  `)}

  h1 {
    font-size: var(--font-size-xxlarge);
    color: white;
    margin: 0;
    margin-top: 1.2em;
  }

  p {
    color: white;
    text-align: center;
    line-height: var(--line-height-medium);

    ${Mobile(css`
      font-size: var(--font-size-medium)
    `)}
  }
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--max-content-small);
  margin: auto;

  ${Mobile(css`
    margin: 0 1rem;
  `)}
`
