import React, { FC } from "react";
import styled from "styled-components";

const Click = styled.a`  
  color: var(--color-text-pink);
  text-decoration: none;

  &:active {
    color: var(--color-text-white);
  }
`;

export interface Props {
  href: string;
  value: string;
}

export const HtmlLink: FC<Props> = ({href, value}) => {
  let ready = false;

  if (href.substring(0, 4) === "http") {
    ready = true;
  }

  return (
    <Click
      href={ready ? href : "http://" + href}
      target="_blank"
      rel="noopener"
    >
      {value}
    </Click>
  );
};
