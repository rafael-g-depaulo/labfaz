import React, { FC } from 'react'
import { Box, Button } from '@adminjs/design-system'
import { ActionProps, useRecord, useRecords } from 'adminjs'


const Subscription: FC<ActionProps> = (props) => {
  const { record: initialRecord, resource, action } = props

  const {
    record,
    handleChange,
    loading,
    setRecord
  } = useRecord(initialRecord, resource.id)

  console.log("Initial", initialRecord)
  console.log("record", record)
  console.log("actions", action)

  // console.log("DATA", data)
  // console.log("records", records)



  return (
    <>
      <Box> Custom component </Box>
      <Button> Faz algo </Button>
    </>
  )
}

export default Subscription
