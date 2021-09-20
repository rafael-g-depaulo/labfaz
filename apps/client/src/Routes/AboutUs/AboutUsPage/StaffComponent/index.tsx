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

  const { team, subtitulo } = data

  return (
    <Wrapper marginTop="70px">
      <StaffHeader>
        <Title level={1}> STAFF </Title>
        <Title level={3}> {subtitulo} </Title>        
      </StaffHeader>
      {team.map((team) => (
        <Drawer teamName={team.name} description={team.description} key={team.id}>
          <StaffGrid>
            {team.staff.map((staff, i) => (<StaffCard data={staff} key={`${staff.id}+${i}`}/>))}
          </StaffGrid>
        </Drawer>
      ))}
    </Wrapper>
  )
}

export default Staff
