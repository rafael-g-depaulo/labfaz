import React, { FC } from 'react'
import { StaffData } from 'Api/AboutUs'

import StaffCard from './StaffCard'
import { StaffGrid, StaffHeader } from './styles'
import { Wrapper } from '../styles'
import { Title } from 'Components/Typography/Title'

interface StaffProps {
  data: StaffData
}

export const Staff: FC<StaffProps> = ( { data } ) => {

  const { staff } =  data

  return (
    <Wrapper>
      <StaffHeader>
        <Title level={1} > STAFF </Title>
        <Title level={3} > Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </Title>        
      </StaffHeader>
      <StaffGrid>
        {
          staff.map((staff) => {
            return(
              <StaffCard data={staff} key={staff.id}/>
            )
          })
        }
      </StaffGrid>
    </Wrapper>

  )
}

export default Staff
