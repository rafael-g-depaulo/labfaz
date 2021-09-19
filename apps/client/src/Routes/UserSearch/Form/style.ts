import styled from "styled-components"


export const SearchDiv = styled.div`
  max-width: 297px;
  max-height: 44px;
  min-height: 40px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
`

export const SearchButton = styled.button`
  height: 100%;
  width: 30%;
  max-width: 24px;
  font-size: var(--font-size-medium);
  background: transparent;
  border: none;
  border-left: 1px solid;
`

export const InputSearch = styled.input`
  max-height: 44px;
  height: 1.3em;
  width: auto;
  max-width: 130px;
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
