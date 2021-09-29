import React, { Dispatch, FC, SetStateAction } from 'react'
import { OptionDiv, BadgeInput, BadgeDiv, OptionWrapper } from "../../UserSearchPage/style"

import { Title } from "Components/Typography/Title"

import { Experience } from "Utils/selectOptionsData"

import { UserSearchParams } from 'Api/UserSeatch'
interface OptionsProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>,
}

type SearchKeys = "drtOnly" | "cpnjOnly" | "ceacOnly" | "meiOnly"

export const OptionsExperience: FC<OptionsProps> = ({ setFunction  }) => {  

  return(
    <OptionDiv>
      <Title 
        level={4}
      >  EXPERIÊNCIA </Title>
      <OptionWrapper>
        {
          Experience.map((option, index) => (
            <BadgeDiv
              key={index}
            >
              <BadgeInput 
                type="checkbox" 
                name="experience" 
                value={option.value}
                onChange={() =>{
                  setFunction(formData => {
                    const key = option.value as SearchKeys
                    const updateFormData = {...formData}
                    updateFormData[key] = !formData[key]
                    updateFormData['showNothing'] = false
                    return updateFormData
                  })
                }}
              />
          </BadgeDiv>
          ))
        }
      </OptionWrapper>
    </OptionDiv>
  )
}


export default OptionsExperience;
