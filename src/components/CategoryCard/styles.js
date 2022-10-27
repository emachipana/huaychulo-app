import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  height: 40px;
  position: relative;
  width: fit-content;
  padding: 0 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  background-color: ${colors.white};
  cursor: pointer;
  transition: .2s ease-in-out;
  ${({ active }) => active ? `
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, .2);
      transform: translateY(-2px);
      background-color: ${colors.gray[500]};
      color: ${colors.white};
    `
  :
    null
  }

  &:hover {
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, .2);
    transform: translateY(-2px);
    background-color: ${colors.gray[500]};
    color: ${colors.white};
  }
`;

export const NewCategory = styled.div`
  height: 40px;
  min-width: 60px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${colors.gray[500]};
  cursor: pointer;
  transition: .2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Options = styled.div`
  position: absolute;
  top: -30%;
  right: -15%;
  transition: .2s ease-in;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: ${({ isHover }) => isHover ? 1 : 0};
  ${({ isHover }) => !isHover ? "pointer-events: none;" : null}
`;

export const ButtonStyle = css`
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  padding: 4px;
  z-index: 1;
`;
