import { useEffect } from "react"
import ReactGA from 'react-ga4'

interface EventProps {
  action: string,
  category: string,
  label?: string,
  value: number
}

export const useEvent = ({ action, category, label, value }: EventProps )  => {
  useEffect(() => {
    ReactGA._gaCommandSendEvent(category, action, label ? label : 'none', value, {})
  }, [ action, category, label, value ])
} 

export default useEvent;
