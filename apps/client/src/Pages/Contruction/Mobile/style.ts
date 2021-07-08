import styled, { css } from 'styled-components'

import RectangleImage from '../Rectangle.png'
import { MobileSmall } from 'Utils/breakpoints'

export interface Props {
  invert?: boolean
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  background-color: var(--background-black);
`;

export const Rectangle = styled.div<Props>`
  background-image: url(${RectangleImage});
  width: 19rem;
  height: 10rem;
  display: flex;
  align-items: center;
  ${props => props.invert ? 'justify-content: right;': 'justify-content: left;'}
  ${props => props.invert ? 'padding-right: 3rem;': 'padding-left: 1rem;'}
  ${props => props.invert ? '': 'float: right;'}
  ${props => props.invert ? 'transform: scale(-1, -1);': ''}

  ${MobileSmall(css`
    width: 15rem;
  `)}
`;

export const Text = styled.h1`
  max-width: 8.2rem;
  color: var(--color-text-beige);
  font-size: var(--font-size-default);
  margin: 0;
  line-height: 1.5rem;
  transform: scale(-1, -1);
`;
