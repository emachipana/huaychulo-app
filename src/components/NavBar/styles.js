import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";
import { css } from "@emotion/react";

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-height: 70px;
  background-color: ${({ isMove }) => isMove ? "rgba(255, 255, 255, .9)" : "transparent"};
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  position: fixed;
  top: 0;
  transition: .3s ease-in;
  box-shadow: ${({ isMove }) => isMove ? "0px 0px 2px 6px rgba(0, 0, 0, .3)" : "none"};
  z-index: 2;
`;

const color = (isMove) => isMove ? colors.gray[800] : colors.white; 

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: .2s ease-in;
  color: ${({ isMove }) => color(isMove)};
  cursor: pointer;
  padding: 4px;
  border-bottom: 2px solid ${({ path, location, isMove }) => path === location ? color(isMove) : "transparent"};

  &:hover {
    border-bottom: 2px solid ${({ isMove }) => color(isMove)};
  }
`;

export const Item = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-family: ${fonts.subtitle};
`;

export const IconStyle = css`
  position: relative;
  top: -1.5px;
  font-size: 20px;
`;
