import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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
  position: fixed;
  top: 50%;
  right: 40%;
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
