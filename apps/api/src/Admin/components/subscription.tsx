import React, { FC } from 'react'
import axios from 'axios'

import { 
  Button, 
  H2, 
  Header, 
  Text,
  TextProps,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody
} from '@adminjs/design-system'
import { ActionProps, useRecord } from 'adminjs'
import { Status, ListItem, StatusBar, Actions } from "./style"

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
  console.log(props)
  action.hideActionHeader = true
  const handleAction = async (id: string, newStatus: "denied" | "accepted") => {
    console.log(id)
    const url = `localhost:5000/admin/resources/Request/records/${id}/updateStatus`
    console.log(url)
    const response = axios.get(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  
    console.log(response)
  }

  const {
    record,
  } = useRecord(initialRecord, resource.id)

  // console.log("Initial", initialRecord)
  // console.log("record", record)
  // console.log("actions", action)
  // console.log("resourceId", resource.id)

  // console.log("DATA", data)
  const { id, about, available } = record.params
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
        <TableHead
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            minWidth: "100%"
          }}
          >
          <Text> Usuário </Text>
          <Text> Status </Text>
        </TableHead>
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
