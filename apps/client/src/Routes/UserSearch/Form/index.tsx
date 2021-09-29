import React, {  Dispatch, FC, SetStateAction } from 'react'
import { SearchButton, SearchDiv, InputSearch } from './style'
import { FiSearch } from 'react-icons/fi'
import { UserSearchParams } from 'Api/UserSearch'
interface FormProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>,
  onInput: () => void
}

export const Form: FC<FormProps> = ({ setFunction, onInput, children }) => {

  return (
      <form 
        onSubmit={(e) => e.preventDefault()} 
        onInput={onInput}
        >
        <SearchDiv>
          <FiSearch size={15} />
          <InputSearch 
            placeholder="Digite um nome ou profissão"
            type="text"
            onChange={({target}) => {
              setFunction(formData => {
                const value = target.value
                const updateFormData = {...formData}
                updateFormData['nameOrProfession'] = value
                updateFormData['showNothing'] = false
                return updateFormData
              })
            }}
            />
          <SearchButton type="submit"> Procurar </SearchButton>
        </SearchDiv>      
        { children }
      </form>
  )
}

export default Form
