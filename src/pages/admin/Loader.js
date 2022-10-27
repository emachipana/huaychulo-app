/** @jsxImportSource @emotion/react */
import { ScaleLoader } from "react-spinners";
import { LoaderStyle } from "./styles";
import { colors } from "../../styles";

function Loader() {
  return (
    <ScaleLoader
      color={colors.gray[500]}
      css={LoaderStyle}
    />
  )
}

export default Loader;
