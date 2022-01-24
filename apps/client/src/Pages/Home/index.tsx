import { FC } from "react"
import { getApiUrl } from "@labfaz/server-conn-info"

// eslint-disable-next-line
export const Home: FC = ({}) => {
  return (
    <div>
      <p>testeeeeeeeeeeeee {getApiUrl()}</p>
    </div>
  )
}

export default Home
