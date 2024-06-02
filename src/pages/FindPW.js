import { useSearchParams } from "react-router-dom";
import PWCheck from "../components/FindPW/PWCheck";
import ChangePW from "../components/FindPW/ChangePW";

const FindPW = () => {
  const [searchParams, setSeratchParams] = useSearchParams();
  const check = searchParams.get("check");
  if (check == null) {
    return <PWCheck></PWCheck>;
  } else if (check === "true") {
    return <ChangePW></ChangePW>;
  }
};

export default FindPW;
