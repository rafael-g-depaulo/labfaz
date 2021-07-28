import React, { FC } from 'react'
import { useField, useFormikContext } from 'formik'

import file from './file.svg'

import { Container, Input, InputFileText } from './style'

interface OptionsProps {
  value: string
  label: string
}

interface InputProps {
  label?: string
  placeholder?: string
  value: string
  name: string
  width?: number
  height?: number
  inputMask?: string
  onChange?: (ev: any) => void
  options?: OptionsProps[]
}

export const FileInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  value,
  inputMask,
  height,
  options,
  ...props
}) => {
  const [, meta] = useField(props)
  const { setFieldValue } = useFormikContext()


  return (
    <Container {...props}>
      <Input>
        {() => (
          <>
            <input
              id="file"
              type="file"
              onChange={(event: any) => {
                setFieldValue(`${value}`, event.currentTarget.files[0])
              }}
            />
            <label htmlFor="file" className="fileContent">
              <InputFileText>{label}</InputFileText>
              <div></div>
              <img src={file} alt="" />
            </label>
          </>
        )}
      </Input>

      {meta.error && <div>{meta.error.toString()}</div>}
    </Container>
  )
}
