import React, { FC, Fragment } from 'react'
import { useField } from 'formik'

import Dropdown from './DropdownSelect.svg'

import { Container, Input } from './style'

interface OptionsProps {
  value: string
  label: string
}

interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  name: string
  width?: number
  height?: number
  inputMask?: string
  onChange?: (ev: any) => void
  options: OptionsProps[]
}

export const SelectInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  value,
  inputMask,
  height,
  options,
  ...props
}) => {
  const [inputProps, meta] = useField(props)

  return (
    <Container {...props}>
      <Input>
        {() => (
          <select
            id={props.name}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            {...inputProps}
          >
            <option value="" label="Selecione" >
              Selecione
            </option>
            {options?.map((option, index) => (
              <Fragment key={index}>
                <option value={option.value} label={option.label} >
                  {label}
                </option>
              </Fragment>
            ))}
          </select>
        )}
      </Input>
      <img src={Dropdown} alt="" />
      <div className="divider"></div>

      {meta.error && <div>{meta.error.toString()}</div>}
    </Container>
  )
}
