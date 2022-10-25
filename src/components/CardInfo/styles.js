import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 300px;
  height: 200px;
  margin-top: 1rem;
  padding: 1rem;
  position: relative;
  border-radius: 0.5rem;
  border: 1px solid ${colors.gray[300]};
  background-color: ${colors.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .1s ease-in;
  text-align: center;
  gap: 1rem;
  color: ${colors.green[600]};

  &:hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, .2);
    transform: scale(1.01);
  }
`;

export const Icons = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  top: -15%;
`;

export const Img = styled.div`
  background-color: ${colors.green[600]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${({ center }) => center ? "50px" : "40px"};
  height: ${({ center }) => center ? "50px" : "40px"};
  font-size: 2rem;
  padding: 0.5rem;
  z-index: ${({center}) => center ? 1 : 0};
  position: ${({ right, left }) => right || left ? "absolute" : "relative"};
  border: 1px solid ${colors.white};
  right: ${({ left }) => left ? "45px" : "none"};
  left: ${({ right }) => right ? "45px" : "none"};
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-top: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.gray[500]};
`;
