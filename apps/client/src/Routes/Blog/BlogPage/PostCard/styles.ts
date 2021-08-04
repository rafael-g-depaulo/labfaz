import styled, { css } from "styled-components";
import { Mobile } from "Utils/breakpoints";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import { Link } from "react-router-dom";

interface DateProps {
  size: string;
}

export const Container = styled.div`
  background-color: var(--background-black);
  display: grid;
  width: 100%;
  grid-template-columns: minmax(5%, auto) minmax(450px, 800px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas:
    ". content ."
    ".    .    .";

  ${Mobile(css`
    grid-template-columns: minmax(8%, auto) minmax(250px, 700px) minmax(
        8%,
        auto
      );
  `)}
`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 100px 0 0 0;

  &:last-child {
    margin-bottom: 100px;
  }

  ${Mobile(css`
    flex-direction: column;
    align-items: center;
    margin: 60px 0 0 0;

    &:last-child {
      margin-bottom: 50px;
    }
  `)}
`;

export const MainTextContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PostTitle = styled(Title)`
  font-size: var(--font-size-title);
  font-weight: bold;
  color: var(--background-white);
  text-align: left;
  margin: 0 25px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2;

  ${Mobile(css`
    font-size: var(--font-size-subtitle);
    margin: 0;
    line-height: 1.5;
  `)}
`;

export const Description = styled(Text)`
  color: var(--color-text-white);
  text-align: justify;
  line-height: 40px;
  margin: 50px 0 20px 0;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 35px 0;
    line-height: 2;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin: 0 0 20px 0;

  ${Mobile(css`
    height: 295px;
    margin: 0 0 40px 0;
  `)}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
 margin-top: 5px;
`;

export const ButtonLayer = styled.div`
  position: relative;
  width: 250px;
  height: 45px;
  background-color: var(--background-yellow);
  z-index: 1;
  top: 41px;
  right: 3px;

  ${Mobile(css`
    width: 150px;
    height: 35px;
    top: -39px;    
  `)}
`;

export const Button = styled(InternalLinkButton)`
  position: relative;
  z-index: 2;
  width: 250px;
  height: 45px;
  background-color: var(--background-pink);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-color: var(--background-black);

  ${Mobile(css`
    width: 150px;
    height: 35px;
  `)}
`;

export const ButtonText = styled(Text)`
  font-size: var(--font-size-medium);
  font-weight: 700;
  color: var(--color-text-beige);
  text-transform: uppercase;

  ${Mobile(css`
    font-size: var(--font-size-short);
  `)}
`;

export const Divisor = styled.hr`
  height: 70px;
  margin: 5px 0;
  border-color: var(--background-pink);

  ${Mobile(css`
    height: 35px;
    margin: 0;
  `)}
`;

export const DateContainer = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;

  ${Mobile(css`
    width: auto;
    margin: 0;
  `)}
`;

export const Date = styled(Text)<DateProps>`
  width: 100%;
  font-size: ${(p) => p.size ? p.size : "var(--font-size-subtitle)"};;
  font-weight: 600;
  color: var(--background-pink);
  text-align: center;
  margin: 0 0 10px 0;
  line-height: 1.2;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 0 0 5px 0;
  `)}


`;
