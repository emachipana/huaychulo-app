import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 320px;
  height: 190px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
`;

export const Logo = styled.section`
  width: 100%;
  height: 55%;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${({ type }) => type === "facebook" ? "#3B5998" : ( type === "twitter" ? "#55ADED" : "#4875B4")};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  line-height: 0;
`;
