import React, { FC } from 'react'
import { StaffData } from 'Api/AboutUs'

import StaffCard from './StaffCard'
import { StaffGrid, StaffTitle, StaffSubtitle, StaffHeader } from './styles'
import { Wrapper } from '../styles'

interface StaffProps {
  data: StaffData
}

export const Staff: FC<StaffProps> = ( { data } ) => {

  const { staff } =  data

  return (
    <Wrapper>
      <StaffHeader>
        <StaffTitle> STAFF </StaffTitle>
        <StaffSubtitle> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </StaffSubtitle>        
      </StaffHeader>
      <StaffGrid>
        {
          staff.map((staff) => {
            return(
              <StaffCard  
                name={staff.name}
                tag={staff.tag}
                text={staff.text}
                image={staff.image}/>
            )
          })
        }
      </StaffGrid>
    </Wrapper>

  )
}

export default Staff
