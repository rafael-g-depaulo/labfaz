import { ReactElement, useEffect } from "react"

import { useParams } from "react-router"

import { useConfirmEmail } from "Api/ConfirmEmail"
import LoadingFullPage from "Components/LoadingFullPage"
import Error from "Pages/Error"

import Display from "./Display"

export const EmailConfirmation = (): ReactElement => {
  const { user_id } = useParams()
  if (!user_id) {
    console.log("TODO: handle URL param error")
    return <></>
  }
  return <EmailConfirmationInner userId={user_id} />
}

const EmailConfirmationInner = ({ userId }: { userId: string }): ReactElement => {
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
