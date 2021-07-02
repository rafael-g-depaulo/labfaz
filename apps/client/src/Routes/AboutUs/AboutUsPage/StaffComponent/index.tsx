import React, { FC } from 'react'
import { StaffData, StaffObject } from 'Api/AboutUs'

import StaffCard from './StaffCard'
import { StaffGrid, StaffTitle, StaffSubtitle, StaffHeader } from './styles'

interface StaffProps {
  data: StaffObject[]
}

export const Staff: FC<StaffProps> = ( {data} ) => {

  return (
    <>
      <StaffHeader>
        <StaffTitle> Staff </StaffTitle>
        <StaffSubtitle> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </StaffSubtitle>        
      </StaffHeader>
      <StaffGrid>
        {
          data.map((staff) => {
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
    </>

  )
}

export default Staff
