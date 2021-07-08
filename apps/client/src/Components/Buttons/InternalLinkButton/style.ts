import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledButton = styled(Link)`

  cursor: pointer;
  border: 0;
  padding: 0.5rem 2rem;
  font-weight: bold;
  text-decoration: none;
  border-top: 2px solid;
  border-left: 2px solid;
  background-color: var(--button-color-pink);
  /* TODO border-radius: ; */
  /* TODO color: ; */
  color: var(--color-text-yellow);
  border-color: var(--button-color-yellow);
`
