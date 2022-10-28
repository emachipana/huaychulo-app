import { css } from "@emotion/react";
import { colors } from "../../styles";

export const ButtonStyle = css`
  font-weight: 600;
  background-color: ${colors.green[600]};
  border: none;

  &:hover {
    background-color: ${colors.green[200]};
  }
`;

export const AlertStyle = css`
  font-weight: 600;
  text-align: center;
`;
