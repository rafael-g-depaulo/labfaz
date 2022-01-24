import { ReactNode, useCallback, useMemo, useRef } from "react"
import { Field, FieldAttributes, FieldProps } from "formik"
import styled from "styled-components"

import { Optional } from "Utils/typeHelpers"

interface childProps {
  clickInput: () => void 
}

export interface HiddenFileInputProps {
  name: string
  children: (props: childProps) => ReactNode
  fieldProps?: Optional<FieldAttributes<File>>
}

const InputTag = styled.input`
  display: none;
`

export const HiddenFileInput = ({
  name,
  children,
  fieldProps = {},
}: HiddenFileInputProps) => {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const clickInput = useCallback(() => fileInputRef.current?.click(), [])
  const childProps = useMemo<childProps>(() => ({ clickInput }), [clickInput])

  return (
    <Field
      id={name}
      name={name}
      type="file"
      {...fieldProps}
    >
      {({ form: { setFieldValue } }: FieldProps) => <>
        <InputTag
          name={name}
          type="file"
          onChange={e => setFieldValue(name, e.target.files?.[0])}
          ref={fileInputRef}
        />
        {children(childProps)}
      </>}
    </Field>
  )
}

export default HiddenFileInput
