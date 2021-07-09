import styled, { css } from 'styled-components'

import RectangleImage from '../Rectangle.png'
import { DesktopLarge, DesktopSmall } from 'Utils/breakpoints'
import { Title } from 'Components/Typography/Title'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-black);
  padding: 0 3rem;

  ${ DesktopLarge(css`
    padding: 0 5rem;
  `)}
`;

export const Triangle = styled.div`
  border-top: 20rem solid transparent;
  border-left: 16rem solid var(--background-black);

  ${DesktopSmall(css`
    border-top: 15rem solid transparent;
    border-left: 10rem solid var(--background-black);
  `)}
`;

export const Rectangle = styled.div`
  background-image: url(${RectangleImage});
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem 0 3rem;

  ${DesktopSmall(css`
    height: 15rem;
  `)}
`;

export const Text = styled(Title)`
  max-width: 8.2rem;
  color: var(--color-text-beige);
  font-size: var(--font-size-title);
  line-height: var(--line-height-default);
`;
