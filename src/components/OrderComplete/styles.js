import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 1rem;
  padding: 1rem;
  margin: auto;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, .3);
  display: flex;
  max-width: 420px;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const FlexRow = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`;

export const Photo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, .2);
  object-fit: cover;
`;

export const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;
