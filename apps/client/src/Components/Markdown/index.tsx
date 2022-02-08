import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Image, MarkdownStyles } from "./styles";
import Link from "Components/TextLink";

interface Props {
  content: string;
  Text?: FC<any>;
}

export const Markdown: FC<Props> = ({ content, Text = "p" }) => {
  return (
    <MarkdownStyles>
      <ReactMarkdown
        children={content}
        components={{
          p: ({ node, children }) => {
            if ((node.children[0] as any).tagName === "a") {
              const link: any = node.children[0];
              return (
                <Link
                  href={link.properties.href}
                  value={link.children[0].value}
                />
              );
            } else if ((node.children[0] as any).tagName === "img") {
              const image: any = node.children[0];
              return (
                <Image
                  src={`${image.properties.src}`}
                  alt={image.properties.alt}
                />
              );
            }
            return <Text>{children}</Text>
          },
        }}
      />
    </MarkdownStyles>
  );
};

export default Markdown;
