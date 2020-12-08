import { useEffect } from "react"
import { useHistory } from "react-router-dom"

interface Options {
  disable?: boolean
}

// hook to set url hash based on given string
export default (hash: string, { disable = false }: Options) => {

  const history = useHistory()
  useEffect(() => {
    if (!disable) {
      if (hash === "") history.replace(`${history.location.pathname}`)
      else history.replace(`${history.location.pathname}#${hash}`)
    }
  }, [hash, history, disable])
}
