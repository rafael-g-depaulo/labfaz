import styled from "styled-components";

import { Text, Rectangle } from "Pages/Construction/Mobile/style";
import { Container } from "Pages/Construction/Mobile/style";

export const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 28px;
`;

export const TitleText = styled(Text)`
  //text-transform: uppercase;
  font-size: var(--font-size-title-short);
  line-height: 1.2;
  margin: 25px 0;
`;

export const SubtitleText = styled(Text)`
  color: var(--color-text-black);
  font-size: var(--font-size-short);
  font-weight: 500;
  line-height: 1.2;
  margin-top: 25px;
`;

export const MobileRectangle = styled(Rectangle)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-left: 6rem;
  height: 215px;
`;

export const ImageRectangle = styled(Rectangle)`
  height: 215px;
`;
