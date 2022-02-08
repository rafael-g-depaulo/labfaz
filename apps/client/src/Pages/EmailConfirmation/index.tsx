import { FC, useEffect } from "react"

import { useConfirmEmail } from "Api/ConfirmEmail"
import LoadingFullPage from "Components/LoadingFullPage"
import Error from "Pages/Error"

import Display from "./Display"

export interface EmailConfirmationProps {
  userId: string
}

export const EmailConfirmation: FC<EmailConfirmationProps> = ({
  userId,
}) => {
  const { error, isLoading, isIdle, mutate } = useConfirmEmail(userId)

  // make request as soon as page loads
  useEffect(() => {
    mutate()
  }, [mutate])

  // on error show error page
  if (error) return (
    <Error
      errorMessage={error.message}
      errorStatus={error.code}
    />
  )

  // if loading
  if (isLoading || isIdle) return <LoadingFullPage />

  return <Display />
}

export default EmailConfirmation
