import { useSearchParams } from "react-router-dom";
import Check from "../components/FindID/Check";
import Result from "../components/FindID/Result";

const FindID = () => {
  const [searchParams, setSeratchParams] = useSearchParams();
  const check = searchParams.get("check");
  if (check === null) {
    return <Check></Check>;
  } else if (check === "true") {
    return <Result></Result>;
  }
};

export default FindID;
