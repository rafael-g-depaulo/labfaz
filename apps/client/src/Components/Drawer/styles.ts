import styled, { css } from 'styled-components'

import { DesktopSmall, DesktopLarge, MobileSmall } from "Utils/breakpoints"

interface VisibilityProps {
  isOpen: boolean
}


export const Container = styled.div<VisibilityProps>`
  display: flex;
  flex-direction: ${props => props.isOpen ? "column" : "row"};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 8px;
  max-width: 92%;
  max-height: inherit;
  min-height: 118px;
  min-width: 92%;
  align-self: center;
  padding: 0 1.5em;
  align-items: ${props => props.isOpen ? "" : "center"};
  justify-content: start;

  h1 {
    color: white;
    padding-left: ${props => props.isOpen ? "" : "3em"};
    margin-bottom: ${props => props.isOpen ? "1.3em" : "0"};
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
  margin-top: ${props => props.isOpen ? '2em' : '0'};
  margin-bottom: ${props => props.isOpen ? '5em' : '0'};


  ${props => props.isOpen ?
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
  display: ${props => props.isOpen ? 'block' : 'none'};
  max-width: 958px;
  max-height: 126px;
  font-size: var(--font-size-subtitle);
  margin: 0;
  padding-left: 10em;
  color: white;
  text-align: justify;


  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-large);
    padding: 0;
  `)}

`

export const ContentDiv = styled.div<VisibilityProps>`
  max-height: ${props => props.isOpen ? "100%" : "0"};
  overflow: hidden;
  display: ${props => props.isOpen ? "flex": "none"};
  transition: all 1s ease-in;
`
