import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  background: url("img/banner.jpg")rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  height: 65vh;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;
