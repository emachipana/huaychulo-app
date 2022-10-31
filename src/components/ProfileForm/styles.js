import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Form = styled.form`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${colors.white};
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, .3);
  max-width: 380px;
  margin: 3rem auto;
`;

export const InputStyle = css`
  &:disabled {
    cursor: not-allowed;
    text-transform: capitalize;
  }
`;
