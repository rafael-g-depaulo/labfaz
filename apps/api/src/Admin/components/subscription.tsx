import React, { FC, useEffect, useState } from 'react'

import { 
  Button, 
  H2, 
  Header, 
  Text,
  Table,
  TableRow,
  TableCell,
  TableBody,
  H3,
  DropDown,
  DropDownItem,
  DropDownMenu
} from '@adminjs/design-system'
import { ActionProps, useRecord, ApiClient } from 'adminjs'
import { Status, Actions } from "./style"

interface student {
  email: string
}
export interface Inscricoes {
  id: string,
  status: string,
  student: student,
  conector?: string[]
}

const Subscription: FC<ActionProps> = (props) => {
  const { record: initialRecord, resource } = props

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

    setSubscripitons(subs => {
      const newSubs = subs.slice(0)
      const idToBeChanged = subs.findIndex(sub => sub.id == id)
      newSubs[idToBeChanged] = {...subs[idToBeChanged], status: newStatus}
      return newSubs
    })
  }

  const {
    record,
  } = useRecord(initialRecord, resource.id)
  const api = new ApiClient()

  const [subscriptions, setSubscripitons] = useState<Inscricoes[]>([])
  const [anwseredSubs, setAnwseredSubs] = useState<Inscricoes[]>([])
  
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
      setSubscripitons(res.data.requests)
    })
    .catch(error => {
      console.log("DEU RUIM", error)
    })
  }, [])

  useEffect(() => {
    api.resourceAction({
        resourceId: "Request",
        responseType: 'json',
        actionName: "getRequests",
        params: {
          courseId: record.id
        },
      })
      .then(res => {
        setAnwseredSubs(res.data.requests)
      })
      .catch(error => {
        console.log("DEU RUIM", error)
      })
    }, [])


  const { name, available } = record.params

  const date = record.params.subscription_start_date as string

  const treatedDate = new Date(date);

  return (
    <>
      <Header>
        <H2> {name} </H2>
        <Status isAvailable={available}>{available ? "aberto" : "fechado"} para inscrições </Status>    
        <Text> Começa das inscrições: {`${treatedDate.getDay()}/${treatedDate.getMonth()}/${treatedDate.getFullYear()}`} </Text>
      </Header>
      <Table>
      <H3> <strong> INSCRICOES PENDENTES </strong> </H3>
        <TableBody style={{
          marginBottom: '1rem'
        }}>
          {subscriptions.length !== 0 ? 
            subscriptions.map(subscription => {
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
            })  :
          <Text> Sem inscrições </Text>
        }
        </TableBody>

        <H3> <strong> INSCRICOES PROCESSADAS </strong> </H3>
        <TableBody>
          {anwseredSubs.length !== 0 ? 
            anwseredSubs.map(subscription => {
              console.log(subscription.conector)
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
                      <DropDown>
                          <Button
                            size="sm"
                          >
                            Conectores
                          </Button>
                          <DropDownMenu>
                            <DropDownItem
                              colorVariant="info"
                              size="sm"
                            >
                              <Text
                                variant="sm"
                              > {subscription.conector && subscription.conector} </Text>
                            </DropDownItem>
                          </DropDownMenu>
                        </DropDown>
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
            })  :
          <Text> Sem inscrições </Text>
        }
        </TableBody>
      </Table>
    </>
  )
}

export default Subscription
