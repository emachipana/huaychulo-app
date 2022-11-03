import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 90%;
  border-radius: 1rem;
  padding: 1rem;
  margin: 2rem auto;
  background-color: ${colors.white};
`;

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Name = styled.h5`
  text-transform: capitalize;
  font-size: 1rem;
`;

export const Flag = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
`;

export const Text = styled.span`
  font-size: 15px;
`;
