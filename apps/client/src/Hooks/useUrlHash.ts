import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

interface Options {
  disable?: boolean
}

// hook to set url hash based on given string
export default (hash: string, { disable = false }: Options) => {

  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (!disable) {
      if (hash === "") navigate(`${location.pathname}`, { replace: true })
      else navigate(`${location.pathname}#${hash}`, { replace: true })
    }
  }, [hash, navigate, disable, location.pathname])
}
