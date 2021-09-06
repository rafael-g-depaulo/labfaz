import React, { FC, useEffect, useState } from 'react'

import { 
  Button, 
  H2, 
  Header, 
  Text,
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@adminjs/design-system'
import { ActionProps, useRecord, ApiClient } from 'adminjs'
import { Status, Actions } from "./style"

interface student {
  active: boolean,
  banner: boolean,
  email: string
}
interface Inscricoes {
  id: string,
  status: string,
  student: student
}

const Subscription: FC<ActionProps> = (props) => {
  const { record: initialRecord, resource, action } = props
  action.hideActionHeader = true
  const handleAction = async (id: string, newStatus: "denied" | "accepted") => {
    const actions = await api.recordAction({
      resourceId: "Request",
      recordId: id,
      actionName: "updateStatus",
      responseType: "json",
      method: 'POST',
      data: {
        status: newStatus
      }
    })

    if(actions) {
      console.log(actions)
    }
  }


  const {
    record,
  } = useRecord(initialRecord, resource.id)
  const api = new ApiClient()

  const { about, available } = record.params
  const inscricoes = record.params.inscricoes as Inscricoes[]

  const date = record.params.subscription_start_date as string

  const treatedDate = new Date(date);
  if(!inscricoes) {
    <Text> Sem inscrições </Text>
  }

  return (
    <>
      <Header>
        <H2> {about} </H2>
        <Status isAvailable={available}>{available ? "aberto" : "fechado"} para inscrições </Status>    
        <Text> Começa das inscrições: {`${treatedDate.getDay()}/${treatedDate.getMonth()}/${treatedDate.getFullYear()}`} </Text>
      </Header>
      <Table>
        <TableBody>
          {inscricoes.map(subscribe => (
            <TableRow>
              <TableCell>
                <Text>
                  {subscribe.student.email}
                </Text>
              </TableCell>
              <TableCell>
                <Text
                  color="orange"
                  as="p"
                  style={{
                    fontWeight: 700
                  }}
                >
                  {subscribe.status}
                </Text>
              </TableCell>
              <TableCell>
                <Actions>
                  <Button 
                    size="sm" 
                    variant="success"
                    onClick={() => {
                      handleAction(subscribe.id, "accepted")
                    }}
                    > Aceitar </Button>
                    <Button 
                    size="sm" 
                    variant="danger"
                    onClick={() => {
                      handleAction(subscribe.id, "denied")
                    }}
                    > Recusar </Button>
                </Actions>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  )
}

export default Subscription
