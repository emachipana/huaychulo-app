import { Backdrop } from "./styles";
import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <Backdrop>
      <HashLoader 
        size="100px"
        color="white"
      />
    </Backdrop>
  );
}

export default Loader;
