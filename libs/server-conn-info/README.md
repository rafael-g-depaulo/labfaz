# `@starter-project/server-conn-info`

A basic library whose purpose it is to be the sole source of truth of how to connect to the backend servers (both the main server api and the strapi api).

## Usage

```typescript
// in an app trying to connect to the servers
import { getApiUrl, getStrapiUrl } from '@starter-project/server-conn-info'

const apiConnection = axios.create({
  baseURL: getApiUrl(),
})

const strapiConnection = axios.create({
  baseURL: getStrapiUrl(),
})

```


```typescript
// in the main server app
import { getApiPort } from '@starter-project/server-conn-info'

const port = getApiPort()

const app = express()
app.get("/ping", (_, res) => res.send("pong"))
app.listen(port, () => console.log(`app listening on port ${port}`))
```
