import styled, { css } from 'styled-components'

import { DesktopSmall, DesktopLarge, MobileSmall } from "Utils/breakpoints"

interface VisibilityProps {
  display: boolean
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 8px;
  max-width: 92%;
  max-height: 779px;
  min-height: 118px;
  align-self: center;
  padding: 0 1.5em;
  justify-content: center;

  :nth-child(2) {
    align-content: center;
  }

  ${DesktopSmall(css`
    min-height: 79px;
  `)}

  ${MobileSmall(css`
    min-height: 100px;
  `)}
`


export const Haeder = styled.div<VisibilityProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-top: ${props => props.display ? '2em' : '0'};
  margin-bottom: ${props => props.display ? '5em' : '0'};

  ${props => props.display ?
    MobileSmall(css`
      flex-direction: column;
  `) : ''}

`

export const Button =  styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  position: fixed;
  padding: 0;
  z-index: 9999;
  ${DesktopLarge(css`
  top: calc((118px - 35px)/2);
  `)}
  
  ${MobileSmall(css`
    top: calc((100px - 35px)/2);
    left: 23px;
`)}

  :hover {
    cursor: pointer;
  }
`

export const Title = styled.p<VisibilityProps>`
  font-size: var(--font-size-title-xlarge);
  font-weight: 700;
  max-width: 254px;
  min-width: fit-content;
  margin: 0;

  padding-left: 3em;


  ${DesktopSmall(css`
    font-size: var(--font-size-title-medium);
  `)}

  ${props => props.display ?
      MobileSmall(css`
        padding-left: 0rem;
        font-size: var(--font-size-title-medium);
      `)
      :
      MobileSmall(css`
      font-size: var(--font-size-title-medium);
    `)
  }
`

export const Description =  styled.p<VisibilityProps>`
  display: ${props => props.display ? 'block' : 'none'};
  max-width: 958px;
  max-height: 126px;
  font-size: var(--font-size-subtitle);
  margin: 0;
  padding-left: 10em;


  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-large);
    padding: 0;
  `)}

`

export const ContentDiv = styled.div<VisibilityProps>`
  max-height: ${props => props.display ? "100%" : "0"};
  overflow: hidden;
  display: ${props => props.display ? "flex": "none"};
  transition: all 1s ease-in;
`
