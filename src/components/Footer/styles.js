import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  background-color: ${colors.gray[600]};
  padding: 1rem;
  width: 100%;
  min-height: 260px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${colors.white};
  max-width: 350px;
  margin: 1rem 1rem 2rem 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h4`
  font-size: 1.4rem;
  font-weight: 800;
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

export const Item = styled.a`
  font-weight: 600;
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    text-decoration: underline;
    color: ${colors.white};
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Subtitle = styled.h4`
  color: ${colors.white};
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 4px;
  z-index: 2;
`;
