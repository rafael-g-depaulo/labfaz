import styled from "styled-components"

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;

  label {
    font-weight: 600;
    color: var(--color-text-black);
    /* margin-bottom: -0.5rem; */
    margin-bottom: 0.75rem;
  }

  input[type="text"], input[type="password"] {
    width: 12.4rem;
    height: 2.4rem;
    border: 0;
    padding: 0.7rem 0.2rem 0.7rem 0.7rem;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`
