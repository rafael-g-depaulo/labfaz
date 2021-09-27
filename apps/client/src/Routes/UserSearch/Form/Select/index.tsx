import React, { FC, SetStateAction, Dispatch } from 'react'

import { UserSearchParams } from 'Api/UserSeatch'

import { Select, SelectDiv } from '../../UserSearchPage/style'
import { Title } from "Components/Typography/Title"

import { CidadesDF, CidadesEntorno, Areas } from "Utils/selectOptionsData"

interface CitySelectProps {
  label: "cidade" | "area"
  setInput: Dispatch<SetStateAction<UserSearchParams>>
}

export const SelectInput: FC<CitySelectProps> = ({ setInput, label }) => {

  const options = label === "cidade" ? CidadesDF.concat(CidadesEntorno) : Areas
  const key = label === "cidade" ? 'city' : 'area'

  // TODO: Adicionar cidades do entorno
  return (
    <SelectDiv>
      <Title level={4} >
        {label.toUpperCase()}
      </Title>
      <Select
        onChange={({target}) => {
          setInput(formData => {
            formData[key] = target.value
            formData['showNothing'] = false
            return formData
          })
        } }
      >
        {
          options.map(option => (
            <option value={option.value}> {option.label} </option>
          ))
        }
      </Select>
    </SelectDiv>
  )
}

export default SelectInput
