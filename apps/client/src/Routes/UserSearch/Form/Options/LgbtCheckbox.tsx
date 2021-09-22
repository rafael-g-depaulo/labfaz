import React, { FC, Dispatch, SetStateAction } from "react"
import { UserSearchParams } from "Api/UserSeatch"

import { LGBTCheckbox, CheckboxDiv } from "../style"

import { Title } from "Components/Typography/Title"

interface CheckboxInterface {
  setFormData: Dispatch<SetStateAction<UserSearchParams>>
}


export const LGBTField: FC<CheckboxInterface> = ({ setFormData }) => {


  return (
    <CheckboxDiv>
      <Title
        level={4}
      > LGBTQ+ </Title>
      <LGBTCheckbox 
        type="checkbox"
        onChange={({ target }) => {
          const value = target.checked
          console.log(value)

          setFormData(formData => {
            formData['LBTQOnly'] = value

            return formData
          })
        }}
        />
    </CheckboxDiv>
  )
}

export default LGBTField
