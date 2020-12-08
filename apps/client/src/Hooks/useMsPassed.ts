import { useEffect, useState } from "react"

// hook that returns true if "wait" ms have passed since the component's
// initial render, and false otherwise
export default (wait: number) => {
  // setup state variable
  const [hasWaited, setHasWaited] = useState(false)
  const [startedWait, setStartedWait] = useState(false)
  
  // wait for the specified ammount of time
  useEffect(() => {
    // make sure that the wait can't be started twice
    if (!startedWait) {
      setStartedWait(true) 
      // wait then change the timer
      setTimeout(() => setHasWaited(true), wait)
    }
  }, [wait, startedWait])

  // return wether the time has passed or not
  return hasWaited
}
