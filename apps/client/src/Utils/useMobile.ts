import useWidth from "Hooks/useWidth";
import { desktopSmall } from "./breakpoints";

export const useMobile = () => {
  const screenWidth = useWidth();
  return screenWidth <= desktopSmall;
};

export default useMobile;
