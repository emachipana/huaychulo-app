import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: end;
  padding: 1rem;

  @media screen and (max-width: 420px){
    gap: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: .2s ease-in;
  cursor: pointer;
  position: relative;
  background-color: ${({ isOpen }) => isOpen ? colors.gray[200] : "transparent"};

  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

export const IconStyle = css`
  font-size: 24px;
  color: ${colors.gray[500]};

  @media screen and (max-width: 420px){
    font-size: 20px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;

export const ProfilePhoto = styled.img`
  width: 45px;
  height: 45px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, .2);

  @media screen and (max-width: 420px){
    width: 35px;
    height: 35px;
  }
`;

export const CountNotifications = styled.span`
  background-color: #F23071;
  color: ${colors.white};
  font-size: 11px;
  font-weight: 700;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  top: 2px;
  right: 4px;
`;

export const Notifications = styled.div`
  overflow: auto;
  width: 200px;
  height: 250px;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
  background-color: ${colors.white};
  position: fixed;
  top: 70px;
  z-index: 1;
  right: 15%;
  transition: .2s linear;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  ${({ isOpen }) => !isOpen ? "pointer-events: none;" : null}

  @media screen and (max-width: 520px){
    right: 40%;
  }
`;
