import styled, { css } from 'styled-components'

import { Text } from 'Components/Typography/Text'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;

  background-color: #111010;
`

export const LabelText = styled(Text)`
  margin-bottom: 2.6rem;
  font-weight: 600;

  color: #fafafa;

  ${DesktopSmall(css`
    margin-bottom: 1.5rem;
    font-size: var(--font-size-short);
  `)}
`

export const LeftSide = styled.div`
  width: 35.5rem;
  height: 50rem;

  border-right: 2px dashed #262626;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 33.5rem;
  `)}

  display: flex;
  flex-direction: column;
`

export const LeftSideContent = styled.div`
  
  margin: 4.2rem 3.3rem 5.2rem 3.3rem;

  ${DesktopSmall(css`
    margin: 2.86rem 2.23rem 5.2rem 2.23rem;
  `)}
`

export const RightSide = styled.div`
  width: 35.5rem;
  height: 50rem;

  ${DesktopSmall(css`
    width: 23.8rem;
    height: 33.5rem;
  `)}

  display: flex;
  flex-direction: column;

  position: relative;
`

export const RightSideContent = styled.div`
  margin: 5.9rem 3.3rem 5.2rem 3.3rem;

  ${DesktopSmall(css`
    margin: 3.98rem 2.23rem 5.2rem 2.23rem;
  `)}
`

export const InputCheckBoxContainer = styled.div`
  margin-bottom: 1.8rem;

  ${DesktopSmall(css`
    margin-bottom: 0.5rem;
  `)}
`
