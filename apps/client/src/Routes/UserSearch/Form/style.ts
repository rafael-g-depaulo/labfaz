import styled from "styled-components"


export const SearchDiv = styled.div`
  max-width: fit-content;
  max-height: 44px;
  min-height: 40px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;

  svg {
    margin-left: 1rem;
  }
`

export const SearchButton = styled.button`
  height: 100%;
  font-size: var(--font-size-medium);
  background: transparent;
  border: none;
  border-left: 1px solid;
`

export const InputSearch = styled.input`
  max-height: 44px;
  height: 1.3em;
  width: auto;
  border: none;
  margin-left: 1rem;
  margin-right: 2.5rem;
  padding: 0;

  ::placeholder {
    font-size: var(--font-size-medium);
  }

  :focus {
    outline: none
  }
`

export const LGBTCheckbox = styled.input`
  margin-left: 1rem;
  border: 1px solid rgba(250, 250, 250, 0.7);

  :hover {
    cursor: pointer;
  }

  ::after {
    content: '';

    width: 6px;
    height: 6px;

    border-radius: 50%;

    display: block;

    background-color: #FC0061;

    transform: scale(0);

    transition: transform 0.15s;
  }

  :checked + ::after {
    transform: scale(1);
  }
`

export const CheckboxDiv = styled.div`
  display: flex;

  * {
    color: white;
  }
`
