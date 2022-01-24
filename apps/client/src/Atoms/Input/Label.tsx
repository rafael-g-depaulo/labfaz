import { FC, LabelHTMLAttributes } from "react"

type BaseInputProps = LabelHTMLAttributes<HTMLLabelElement>
export interface LabelProps extends BaseInputProps {
  htmlFor: string
}

export const Label: FC<LabelProps> = ({
  children,
  ...props
}) => {
  return (
    <label {...props}>{children}</label>
  )
}

export default Label
