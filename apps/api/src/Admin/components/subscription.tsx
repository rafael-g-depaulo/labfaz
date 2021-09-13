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
import { idText } from 'typescript'

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
    await api.recordAction({
      resourceId: "Request",
      recordId: id,
      actionName: "updateStatus",
      responseType: "json",
      method: 'POST',
      data: {
        status: newStatus
      }
    })
  }

  const {
    record,
  } = useRecord(initialRecord, resource.id)
  const api = new ApiClient()

  const [subscriptions, setSubscripitons] = useState([])
  useEffect(() => {
  api.resourceAction({
      resourceId: "Request",
      responseType: 'json',
      actionName: "getOpenSubscriptions",
      method: "GET",
      params: {
        courseId: record.id
      },
      query: record.id
    })
    .then(res => {
      console.log(res)
    })
  }, [])




  const { name, available } = record.params
  const inscricoes = record.params.inscricoes as Inscricoes[]
  inscricoes.forEach(inscricao => {
    if(inscricao.status.includes("accepted")) {
      console.log(inscricao.status)
    }
  })



  const date = record.params.subscription_start_date as string

  const treatedDate = new Date(date);
  if(!inscricoes) {
    return(
      <Text> Sem inscrições </Text>
    )
  }

  return (
    <>
      <Header>
        <H2> {name} </H2>
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
