import { FC } from "react"
import SignupForm from "Organisms/SignupForm"

export const RegisterUser: FC = () => {
  return (
    <div>
      <h1>Register new User</h1>
      <SignupForm />
    </div>
  )
}

export default RegisterUser
