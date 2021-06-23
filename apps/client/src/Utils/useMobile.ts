import useWidth from "Hooks/useWidth";

export const useMobile = () => {
  const screenWidth = useWidth()
  return screenWidth < 1024
}

export default useMobile
