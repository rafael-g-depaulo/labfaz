import styled, { css } from 'styled-components'

import { Title } from 'Components/Typography/Title'
import { Rectangle } from 'Pages/Construction/Web/style'
import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-black);
`;

export const Content = styled.div`
  padding: 0 10rem;
  ${DesktopSmall(css`
    padding: 0 5rem;
  `)}
`;

export const Rectangle2 = styled(Rectangle)`
  max-width: 60rem;
  padding: 0 3rem 0 3rem;
  ${DesktopSmall(css`
    padding: 0 1rem 0 3rem;
  `)}
`;

export const Text = styled(Title)`
  max-width: 14rem;
  color: var(--color-text-beige);
  font-size: var(--font-size-title);
  line-height: var(--line-height-default);

  ${DesktopSmall(css`
    max-width: 10rem;
  `)}
`;
