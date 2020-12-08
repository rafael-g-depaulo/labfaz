import "reflect-metadata"
import { createConnection } from "typeorm"

import { getConfig } from "./config"

const connect = () => createConnection(getConfig())
  .then(conn => ({ conn }))

export default connect
