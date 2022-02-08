import { FC } from 'react'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

import { Container, Input } from './style'
import { IoMdInformationCircle } from 'react-icons/io'

export interface InputProps {
  label?: string
  placeholder?: string
  name: string
  width?: number
  height?: number
  inputMask?: string
  informationText?: string
  obrigatory?: boolean
  disabled?: boolean
  onChange?: (ev: any) => void
}

export const TextInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  inputMask,
  height,
  obrigatory,
  informationText,
  disabled,
  children,
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
              {label}

              {obrigatory && <p className="obrigatory"> * </p>}

              {informationText && (
                <>
                  <div className="svgContainer">
                    <IoMdInformationCircle />
                    <p className="information">{informationText}</p>
                  </div>
                </>
              )}
            </label>

            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        </div>
      )}

      <Input>
        {() => (
          <InputMask
            mask={inputMask ? inputMask : ''}
            id={props.name}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            type="text"
            placeholder={placeholder}
            {...inputProps}
            disabled={disabled}
          />
        )}
      </Input>
    </Container>
  )
}
