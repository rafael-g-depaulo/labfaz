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
  email: string
}
export interface Inscricoes {
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
      params: {
        courseId: record.id
      },
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log("DEU RUIM", error)
    })
  }, [])




  const { name, available } = record.params
  const inscricoes = record.params.inscricoes as Inscricoes[]
  const pending = inscricoes.map((inscricao) => {
    if(inscricao.status.includes("pending")) {
        return inscricao
    }
    return
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
          {pending ? 
            pending.map(subscription => {
              if(subscription) {
                return (
                  <TableRow>
                    <TableCell>
                      <Text>
                        {subscription.student.email}
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
                        {subscription.status}
                      </Text>
                    </TableCell>
                    <TableCell>
                      <Actions>
                        <Button 
                          size="sm" 
                          variant="success"
                          onClick={() => {
                            handleAction(subscription.id, "accepted")
                          }}
                          > Aceitar </Button>
                          <Button 
                          size="sm" 
                          variant="danger"
                          onClick={() => {
                            handleAction(subscription.id, "denied")
                          }}
                          > Recusar </Button>
                      </Actions>
                    </TableCell>
                  </TableRow>
                )
              } else return
            })  :
          <Text> Sem inscrições </Text>
        }
        </TableBody>
      </Table>

    </>
  )
}

export default Subscription
