import React, { FC } from 'react'
import { TeamsData } from 'Api/AboutUs'

import StaffCard from './StaffCard'
import { StaffGrid, StaffHeader } from './styles'
import { Wrapper } from '../styles'
import { Title } from 'Components/Typography/Title'
import Drawer from "Components/Drawer"


interface StaffProps {
  data: TeamsData
}

export const Staff: FC<StaffProps> = ( { data } ) => {

  const { team } =  data

  return (
    <Wrapper marginTop="70px">
      <StaffHeader>
        <Title level={1} > STAFF </Title>
        <Title level={3} > Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </Title>        
      </StaffHeader>
      {
        team.map((team) => {
          return(
            <Drawer teamName={team.name} description={team.description  }>
              <StaffGrid>
                {team.staff.map((staff) => {
                  return(
                    <StaffCard data={staff} key={staff.id}/>                  
                  )
                })}
              </StaffGrid>
            </Drawer>
          )
        })
      }
    </Wrapper>
  )
}

export default Staff
