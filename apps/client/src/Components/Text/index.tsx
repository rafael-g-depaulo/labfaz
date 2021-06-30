import React, { FC } from "react"
import { Paragraph, ParagraphProps } from "./style"

type TextProps = ParagraphProps & {
  children: React.ReactNode
};

export const Text: FC<TextProps> = ({children, ...textProps}) => {

  return (
      <Paragraph {...textProps}>
        {children}
      </Paragraph>
  )
}

export default Text
