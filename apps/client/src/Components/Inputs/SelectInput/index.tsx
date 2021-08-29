import React, { FC, Fragment } from 'react'
import { useField } from 'formik'
import { MdArrowDropDownCircle } from 'react-icons/md'
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
  obrigatory?: boolean
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
  obrigatory,
  ...props
}) => {
  const [inputProps, meta] = useField(props)

  return (
    <Container
      {...props}
      validationError={meta.touched && meta.error ? true : false}
    >
      {label && (
        <div className="labelContainer">
          <div className="labelContent">
            <label htmlFor={props.name}>
              {label} {obrigatory && <p className="obrigatory"> * </p>}
              {meta.touched && meta.error && (
                <span className="errorMessage">{meta.touched &&meta.error}</span>
              )}
            </label>
          </div>
        </div>
      )}

      <Input>
        {() => (
          <select
            id={props.name}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            {...inputProps}
          >
            <option value="" label="Selecione">
              Selecione
            </option>
            {options?.map((option, index) => (
              <Fragment key={index}>
                <option value={option.value} label={option.label}>
                  {option.value}
                </option>
              </Fragment>
            ))}
          </select>
        )}
      </Input>
      <MdArrowDropDownCircle />
    </Container>
  )
}
