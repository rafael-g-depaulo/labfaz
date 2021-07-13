import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Image, MarkdownStyles } from "./styles";
import Link from "./Link";

interface Props {
  content: string;
}

export const Markdown: FC<Props> = ({ content }) => {
  return (
    <MarkdownStyles>
      <ReactMarkdown
        children={content}
        components={{
          p: ({ node, children }) => {
            if (node.children[0].tagName === "a") {
              const link: any = node.children[0];
              return (
                <Link
                  href={link.properties.href}
                  value={link.children[0].value}
                />
              );
            }
            return <p>{children}</p>;
          },
          image: Image,
        }}
      />
    </MarkdownStyles>
  );
};

export default Markdown;
