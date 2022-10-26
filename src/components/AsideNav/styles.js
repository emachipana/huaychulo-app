import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.aside`
  width: 235px;
  height: 100vh;
  top: 0;
  position: sticky;
  background-color: ${colors.green[600]};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  gap: 5px;
  overflow: hidden;
  z-index: 5;
  transition: .4s linear;

  .handle-logo {
    display: block;
    position: relative;
  }

  .handle {
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    position: ${({isOpen}) => isOpen ? "absolute" : "relative"};
    top: ${({isOpen}) => isOpen ? "8px" : "-2px"};
    left:  ${({isOpen}) => isOpen ? "8px" : "-2px"};
  }

  @media screen and (max-width: 630px) {
    height: ${({isOpen}) => isOpen ? "100vh" : "60px"};
    width: ${({isOpen}) => isOpen ? "200px" : "70px"};
    position: fixed;

    .handle-logo {
      right: ${({ isOpen }) => isOpen ? "0" : "-100%"};
    }

    .handle {
      display: flex;
    }
  }
`;


export const Hr = styled.hr`
  color: ${colors.white};
  margin: 0.7rem 0;
  width: 100%;
`;

export const NavItem = styled.div`
  width: 100%;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.white};
  border-radius: 0.5rem;
  transition: .2s ease-in;
  cursor: pointer;
  ${({ current }) => current ? `
    background-color: ${colors.green[200]};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, .2);
    transform: translateY(-6px);
  `
  :
  null
  }

  &:hover {
    background-color: ${colors.green[200]};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, .2);
    transform: translateY(-6px);
  }
`;

export const NavSection = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 17px;

  @media screen and (max-width: 820px) {
    font-size: 15px;
  }
`;

export const IconStyle = css`
  font-size: 20px;
  position: relative;
  top: -2px;
  @media screen and (max-width: 820px) {
    font-size: 18px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  align-self: start;
  color: rgba(255, 255, 255, .5);
  font-size: 14px;
  font-weight: 700;
`; 

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  opacity: 0;
  transition: .4s linear;
  ${({ isOpen }) => !isOpen ? "pointer-events: none" : null};

  @media screen and (max-width: 630px) {
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  }
`;
