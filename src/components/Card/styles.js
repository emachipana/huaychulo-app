import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 240px;
  height: 140px;
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${colors.white};
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: .2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FlexRow = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Num = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

export const Name = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
