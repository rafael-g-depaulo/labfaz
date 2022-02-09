import styled, { css } from 'styled-components'

import RectangleImage from '../Rectangle.png'
import { MobileSmall } from 'Utils/breakpoints'
import { Title } from 'Components/Typography/Title'

export interface Props {
  invert?: boolean
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: var(--background-black);
`;

export const Rectangle = styled.div<Props>`
  background-image: url("${css`${RectangleImage}`}");
  width: 19rem;
  height: 10rem;
  display: flex;
  align-items: center;
  ${props => props.invert
    ? css`
      justify-content: right;
      padding-right: 3rem;
      transform: scale(-1, -1);
    ` : css`
      justify-content: left;
      padding-left: 1rem;
      float: right;
    `
  }

  ${MobileSmall(css`
    width: 15rem;
    padding-right: 2rem;
  `)}
`;

export const Text = styled(Title)`
  max-width: 8.2rem;
  color: var(--color-text-beige);
  transform: scale(-1, -1);
`;
