import React, { Dispatch, FC, SetStateAction } from 'react'
import { OptionDiv, BadgeInput, BadgeDiv, OptionWrapper } from "../../UserSearchPage/style"

import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"

import { UserSearchParams } from 'Api/UserSeatch'
interface OptionsProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>,
  start: () => void
}

export const OptionGender: FC<OptionsProps> = ({ setFunction, start }) => {  

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
              start()
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
              start()
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
              setFunction(formData => {
                formData['LBTQOnly'] = value
                return formData
              })
              start()
            }}
            />
        </BadgeDiv>
      </OptionWrapper>
    </OptionDiv>
  )
}


export default OptionGender;
