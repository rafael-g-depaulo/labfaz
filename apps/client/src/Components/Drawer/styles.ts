import styled, { css } from 'styled-components'

import { DesktopSmall, DesktopLarge, MobileSmall } from "Utils/breakpoints"

interface VisibilityProps {
  display: boolean
}


export const Container = styled.div<VisibilityProps>`
  display: flex;
  flex-direction: ${props => props.display ? "column" : "row"};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 8px;
  max-width: 92%;
  max-height: inherit;
  min-height: 118px;
  min-width: 92%;
  align-self: center;
  padding: 0 1.5em;
  align-items: ${props => props.display ? "" : "center"};
  justify-content: start;

  h1 {
    color: white;
    padding-left: 3em;
    min-width: fit-content;
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

  .visibility {
    display: ${props => props.display ? "block" : "none"}
  }

  ${props => props.display ?
    MobileSmall(css`
      flex-direction: column;
  `) : ''}

`

export const Button =  styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  position: relative;
  padding: 0;
  z-index: 9999;
  display: flex;
  align-self: baseline;
  
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


export const Description =  styled.p<VisibilityProps>`
  display: ${props => props.display ? 'block' : 'none'};
  max-width: 958px;
  max-height: 126px;
  font-size: var(--font-size-subtitle);
  margin: 0;
  padding-left: 10em;
  color: white;


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
