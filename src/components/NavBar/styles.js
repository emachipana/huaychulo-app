import styled from "@emotion/styled";
import { fonts } from "../../styles";
import { css } from "@emotion/react";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 10vh;
  gap: 1rem;
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, .2);
  background-image: linear-gradient(to bottom, #000000, #3b3b3b, #777777, #b9b9b9, #F5F5F5);
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: .2s ease-in;
  cursor: pointer;

  &:hover {
    color: white;
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
