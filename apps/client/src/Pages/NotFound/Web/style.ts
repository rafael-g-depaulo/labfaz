import styled, { css } from 'styled-components'

import { Title } from 'Components/Typography/Title'
import { Rectangle } from 'Pages/Construction/Web/style'
import { DesktopSmall } from 'Utils/breakpoints'

export const Content = styled.div`
  padding: 1.6rem 10rem;
  ${DesktopSmall(css`
    padding: 0.8rem 5rem;
  `)}
`;

export const Rectangle2 = styled(Rectangle)`
  max-width: var(--max-content-small);
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
