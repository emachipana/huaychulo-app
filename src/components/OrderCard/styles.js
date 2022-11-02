import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
  padding: 1rem;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ total }) => total ? colors.green[600] :colors.gray[700]};
  margin: 0;
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  justify-content: space-between;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
