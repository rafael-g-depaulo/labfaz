import { desktopSmall } from "Utils/breakpoints"
import useWidth from "./useWidth"

export const useMobile = () => {
  const screenWidth = useWidth()
  return screenWidth < desktopSmall
}

export default useMobile
