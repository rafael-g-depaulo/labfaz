import { useEffect } from "react"
import ReactGA from 'react-ga4'

interface PageViewProps {
  name?: string,
  path: string
}

export const usePageview = ({ name, path }: PageViewProps) => {
  useEffect(() => {
    ReactGA._gaCommandSendPageview(name ? name : path, path, path)
  }, [path, name])
} 

export default usePageview;
