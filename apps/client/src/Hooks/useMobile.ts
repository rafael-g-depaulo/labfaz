import useWidth from "./useWidth"

export const useMobile = () => {
  const screenWidth = useWidth()
  return screenWidth <= 660
}

export default useMobile
