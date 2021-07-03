import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  buttonColor?: 'primary' | 'secondary' | 'secondary-variant-1' | 'white' | 'gray'
}

const ButtonVariation = {

  'primary': css`
    background-color: var(--button-color-pink);
    cursor: pointer;
    /* TODO border-radius: ; */
    padding: 0.5rem 2rem;
    text-decoration: none;
    /* TODO color: ; */
    color: var(--color-text-yellow);
    border-top: 2px solid var(--button-color-yellow);
    border-left: 2px solid var(--button-color-yellow);
    /* $ {ShortScreen('font-size: var(--font-size-short); padding: 0.5rem 1rem')}; */
    /* $ {MediumScreen('font-size: var(--font-size-medium)')}; */
    /* $ {LargeScreen('font-size: var(--font-size-large)')}; */
  `,

  'secondary': css`
    text-decoration: none;
    color: var(--color-text-pink);
    padding: 0.5rem 3rem;
    background-color: var(--button-color-yellow);
    border: 0;
    cursor: pointer;
    border-top: 2px solid black;
    border-left: 2px solid black;
  `,

  'secondary-variant-1': css`
    text-decoration: none;
    color: var(--color-text-pink);
    padding: 0.5rem 3rem;
    background-color: var(--button-color-yellow);
    border: 0;
    cursor: pointer;
    border-top: 2px solid var(--button-color-pink);
    border-left: 2px solid var(--button-color-pink);
  `,

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
