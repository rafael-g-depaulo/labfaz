import { useLocation } from "react-router"

export const useQueries = () => new URLSearchParams(useLocation().search)

export default useQueries
