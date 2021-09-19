import React, {  FC, FormEvent } from 'react'
import { SearchButton, SearchDiv, InputSearch } from './style'
import { FiSearch } from 'react-icons/fi'


interface FormProps {
  handler: (e: FormEvent) => void,
  setFunction: (name: string) => void,
  name: string
}

export const Form: FC<FormProps> = ({ handler, setFunction, name }) => {

  return (
    <>
      <form onSubmit={handler}>
        <SearchDiv>
          <FiSearch size={15} />
          <InputSearch 
            placeholder="Procurar profissional"
            type="text"
            value={name}
            onChange={({target}) => {
              setFunction(target.value)
            }}
            />
          <SearchButton type="submit"> Procurar </SearchButton>
        </SearchDiv>      
      </form>
    </>
  )
}

export default Form
