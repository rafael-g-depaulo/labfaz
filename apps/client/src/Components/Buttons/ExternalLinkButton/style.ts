import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  buttonColor?: 'white' | 'gray' 
}

const ButtonVariation = {

  'white': css`  
    background-color: var(--background-white);
    cursor: pointer;
    /* TODO border-radius: ; */
    padding: 0.5rem 2rem;
    text-decoration: none;
    /* TODO color: ; */
    color: var(--color-text);
    border: 0;
    /* $ {ShortScreen('font-size: var(--font-size-short); padding: 0.5rem 1rem')}; */
    /* $ {MediumScreen('font-size: var(--font-size-medium)')}; */
    /* $ {LargeScreen('font-size: var(--font-size-large)')}; */
  `,

  'gray': css`
    text-decoration: none;
    color: var(--color-text);
    padding: 0.5rem 3rem;
    background-color: var(--background-dark-gray);
    border: 0;
    cursor: pointer;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => ButtonVariation[props.buttonColor || 'white' ]}
`
