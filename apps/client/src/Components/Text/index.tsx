import React, { FC } from "react"
import { TextDiv, Paragraph, ParagraphProps } from "./style"

interface Props {
  paragraph?: ParagraphProps,
}


export const Text: FC<Props> = ({ paragraph, children }) => {

  return (
    <TextDiv>
      <Paragraph {...paragraph}>
        {children}
      </Paragraph>
    </TextDiv>
  )
}

export default Text
