import React, { FC } from "react"
import { TextDiv, Paragraph, DivProps, ParagraphProps } from "./style"

interface Props {
  div?: DivProps,
  paragraph?: ParagraphProps,
}


export const Text: FC<Props> = ({ div, paragraph, children }) => {

  return (
    <TextDiv {...div}>
      <Paragraph {...paragraph}>
        {children}
      </Paragraph>
    </TextDiv>
  )
}

export default Text
