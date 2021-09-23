import React, {  Dispatch, FC, SetStateAction } from 'react'
import { SearchButton, SearchDiv, InputSearch } from './style'
import { FiSearch } from 'react-icons/fi'
import { UserSearchParams } from 'Api/UserSeatch'
interface FormProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>,
}

export const Form: FC<FormProps> = ({ setFunction }) => {

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchDiv>
          <FiSearch size={15} />
          <InputSearch 
            placeholder="Digite um nome ou profissão"
            type="text"
            onChange={({target}) => {
              setFunction(formData => {
                formData['nameOrProfession'] = target.value
                return formData
              })
            }}
            />
          <SearchButton type="submit"> Procurar </SearchButton>
        </SearchDiv>      
      </form>
    </>
  )
}

export default Form
