import React, { Dispatch, FC, SetStateAction } from 'react'
import { OptionDiv, BadgeInput, BadgeDiv, OptionWrapper } from "../../UserSearchPage/style"

import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"

import { UserSearchParams } from 'Api/UserSeatch'
interface OptionsProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>,
}

export const OptionGender: FC<OptionsProps> = ({ setFunction }) => {  

  return(
    <OptionDiv>
      <Title 
        level={4}
        >  GÊNERO </Title>
      <OptionWrapper>
        <BadgeDiv
          isChecked
        >
          <Text> Todes </Text>
          <BadgeInput 
            type="radio" 
            name="gender" 
            value={"Todes"}
            key="todes"
            defaultChecked
            onChange={(e) =>  setFunction(formData => {
              formData['nonMenOnly'] = e.currentTarget.value !== "Todes"
              formData['showNothing'] = false
              return formData
            })
        }
          />
        </BadgeDiv>
          
        <BadgeDiv
          isChecked
        >
          <Text> Não-homem </Text>
          <BadgeInput 
            type="radio" 
            name="gender" 
            value={"Não-homem"}
            key="nao_homem"
            onChange={(e) => setFunction(formData => {
              formData['nonMenOnly'] = e.currentTarget.value !== "Todes"
              return formData
            })}
          />
        </BadgeDiv>
        
        <BadgeDiv>
          <Text> LGBTQ+ </Text>
          <BadgeInput 
            type="checkbox"
            onChange={({ target }) => {
              const value = target.checked
              console.log(value)

              setFunction(formData => {
                formData['LBTQOnly'] = value
                return formData
              })
            }}
            />
        </BadgeDiv>
      </OptionWrapper>
    </OptionDiv>
  )
}


export default OptionGender;
