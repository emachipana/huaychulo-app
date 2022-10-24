import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.label`
  position: relative;
  background-color: ${colors.white};
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, .5);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const FlexRow = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-family: ${fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.gray[600]};
`;
