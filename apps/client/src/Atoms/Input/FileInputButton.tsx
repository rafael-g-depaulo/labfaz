import { FC } from "react"
import { FieldAttributes } from "formik"
import styled from "styled-components"

import { getColor } from "GlobalStyles/cssVar"
import { Optional } from "Utils/typeHelpers"
import HiddenFileInput from "./HiddenFileInput"

export interface FileInputButtonProps {
  name: string
  fieldProps?: Optional<FieldAttributes<File>>
}

const FileButton = styled.button`
  border-radius: 25px;
  background-color: ${getColor("secondary")};
  margin: 1.6em 0;
`

export const FileInputButton: FC<FileInputButtonProps> = ({
  name,
  fieldProps,
  children,
  ...props
}) => {
  return (
    <HiddenFileInput
      name={name}
      fieldProps={fieldProps}
    >
      {({ clickInput }) =>
        <FileButton
          type="button"
          onClick={clickInput}
          children={children}
          {...props}
        />
      }
    </HiddenFileInput>
  )
}

export default FileInputButton
