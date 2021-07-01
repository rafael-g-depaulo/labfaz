// import React, { FC, ButtonHTMLAttributes } from 'react'

// import styled from 'styled-components'

// export interface ButtonProps {
//   padding?: string
//   href: string
// }

// type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

// const StyledButton = styled.button`
//   background-color: var(--background-white);
//   cursor: pointer;
//   /* TODO border-radius: ; */
//   padding: 0.5rem 2rem;
//   text-decoration: none;
//   /* TODO color: ; */
//   color: var(--color-text);
//   border: none;
// `


// export const ExternalLinkButton: FC<ButtonProps & ButtonType> = ({
//   children,
//   href,
//   ...restProps
//   }) => {
//   return (
//     <>
//       <a href={href}>
//         <StyledButton {...restProps} > {children} </StyledButton>
//       </a>
//     </>
//   )
// }
