import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin: 2rem auto;
`;

export const Categories = styled.div`
  overflow: auto;
  width: 100%;
  max-height: 150px;
  z-index: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const LoaderStyle = css`
  position: absolute;
  top: 40%;
  right: 45%;
`;

export const Dishes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const Orders = styled.div`
  background-color: ${colors.white};
  width: 100%;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 1rem;
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;
