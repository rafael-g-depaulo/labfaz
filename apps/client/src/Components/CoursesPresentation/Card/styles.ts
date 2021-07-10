import styled from "styled-components";
import { Mobile, DesktopSmall } from "Utils/breakpoints";
import { css } from "styled-components";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

interface GridProps {
  position: any;
}

interface ButtonColors {
  colors: string;
  border: string;
}

export const Container = styled.div`
  height: 100%;
  display: grid;
  margin-left: 6%;
  max-width: 100%;
  grid-template-columns: minmax(200px, 330px) minmax(5%, 12%) minmax(
      200px,
      330px
    );
  grid-template-rows: minmax(325px, 430px) minmax(5%, auto) minmax(325px, 430px);
  grid-template-areas:
    "CardContainer . CardContainer"
    "      .       .        .     "
    "CardContainer . CardContainer";

  ${Mobile(css`
    grid-template-columns: minmax(250px, 300px);
    grid-template-rows: minmax(340px, 420px) minmax(7%, auto) minmax(
        340px,
        420px
      );
    grid-template-areas:
      "CardContainer"
      "      .      "
      "CardContainer";
    margin: 30px 0;
  `)}
`;

export const CardContainer = styled.div<GridProps>`
  grid-area: "CardContainer";
  grid-column: ${(p) => p.position.column};
  grid-row: ${(p) => p.position.row};
  width: 100%;
  background-color: var(--background-pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  border-radius: 14px;

  ${Mobile(css`
    border-radius: 12px;
  `)}
`;

export const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: 140px;
  width: 100%;
  border-radius: 14px 14px 0 0;
  border-bottom: 6px solid rgba(0, 0, 0, 0.33);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const MainText = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled(Text)`
  margin: 0 0 0 8px;
  font-size: var(--line-height-small);
  font-weight: 600;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${DesktopSmall(css`
    font-size: var(--font-size-default);
  `)}
`;

export const CardSubtitle = styled(Text)`
  margin: 0 0 0 8px;
  font-size: var(--font-size-short);
  color: var(--color-text-white);
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  height: 90px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 8px 0 12px 0;
`;

export const CardDescription = styled(Text)`
  width: 100%;
  font-size: var(--font-size-short);
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const BottomWrapper = styled.div`
  margin: 0 0 0 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DateText = styled(Text)`
  font-size: var(--font-size-short);
  font-weight: 600;
  text-align: left;
  line-height: 1.6;

  &:last-child {
    font-weight: 500;
  }

  ${DesktopSmall(css`
    font-size: var(--font-size-small);
  `)}
`;

export const ButtonWrapper = styled.div`
  margin-right: 15px;
  height: 34px;

  ${Mobile(css`
    margin-right: 18px;
    height: 30px;
  `)}

  ${DesktopSmall(css`
    margin-right: 12px;
    height: 30px;
  `)}
`;

export const ButtonLayer = styled.div<ButtonColors>`
  width: 100%;
  height: 34px;
  position: relative;
  z-index: 1;
  background-color: ${(p) => p.colors};
  border: solid 1px var(--background-black);
  right: 3px;

  ${Mobile(css`
    height: 30px;
    right: 3px;
  `)}

  ${DesktopSmall(css`
    width: 90px;
    height: 30px;
    right: 3px;
  `)}
`;

export const Button = styled(InternalLinkButton)<ButtonColors>`
  position: relative;
  z-index: 2;
  bottom: 31px;
  width: 100%;
  height: 34px;
  background-color: ${(p) => p.colors};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: solid 1px ${(p) => p.border};
  padding: 5px 30px;

  ${Mobile(css`
    height: 30px;
    bottom: 27px;
  `)}

  ${DesktopSmall(css`
    padding: 5px 10px;
    width: 90px;
    height: 30px;
    bottom: 27px;
  `)}
`;

export const ButtonText = styled(Text)<ButtonColors>`
  font-size: var(--font-size-short);
  font-weight: 700;
  color: ${(p) => p.colors};
  text-transform: uppercase;

  ${DesktopSmall(css`
    font-size: var(--font-size-small);
  `)}
`;
