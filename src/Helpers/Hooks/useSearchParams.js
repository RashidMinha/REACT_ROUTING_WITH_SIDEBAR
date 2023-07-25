import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import TwURLSearchParams
 from "./TwURLSearchParams ";
const useSearchParams = () => {
  // use location from react router
  const location = useLocation();

  // parse the url search params
  const searchParams = useMemo(() => new TwURLSearchParams(location.search), [location.search]);
  return searchParams;
}
export default useSearchParams;
