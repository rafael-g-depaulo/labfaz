// import React, { FC, ButtonHTMLAttributes } from 'react'
// import { Link } from 'react-router-dom'
// import { StyledButton } from './style'

// export interface ButtonProps {
//   ExternalLink?: boolean
//   InternalLink?: boolean
//   To: string
//   width?: number
// }

// type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

// export const Button: FC<ButtonProps & ButtonType> = ({
//     InternalLink,
//     ExternalLink,
//     To,
//     children,
//     ...restProps
//   }) => {
//   return (
//     <>
//       {ExternalLink && (
//         <StyledButton {...restProps} > {children} </StyledButton>
//       )}

//       {InternalLink && (
//         <Link to={To}>
//           <StyledButton {...restProps} > {children} </StyledButton>
//         </Link>
//       )}
//     </>
//   )
// }
