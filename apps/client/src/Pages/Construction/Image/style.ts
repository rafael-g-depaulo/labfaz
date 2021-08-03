import styled, { css } from 'styled-components'

import { Mobile, DesktopSmall } from 'Utils/breakpoints'


export const ImageConstruction = styled.img`
  height: 20rem;
  width: 20rem;

  ${DesktopSmall(css`
    height: 15rem;
    width: 15rem;
  `)}

  ${Mobile(css`
    height: 10rem;
    width: 10rem;
  `)}
`;
