import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.div`
  background-color: ${colors.white};
  opacity: .98;
  width: 100%;
  height: 70px;
  z-index: 5;
  position: sticky;
  top: 0;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease-in;

  .handle {
    display: none;
  }

  .nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    background-color: ${colors.white};
    z-index: 5;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem 2rem;

    .nav {
      transition: .3s ease-in;
      position: fixed;
      left: -100%;
      top: 70px;
      flex-direction: column;
      gap: 12%;
      width: 100%;
      height: 100vh;
      padding: 1rem;
      opacity: .98;
    }

    .handle {
      display: block;
    }

    .nav.active {
      left: 0; 
    }
  }
`;

export const Logo = styled.section`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: ${({ color }) => color ? color : colors.gray[700]};
  cursor: pointer;
`;

export const Img = styled.div`
  background-color: ${colors.green[600]};
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  gap: 6px;
  padding: 0.5rem;
  border-radius: 14px;
  transition: .2s linear;
  cursor: pointer;
  background-color: ${({active}) => active ? colors.gray[200] : "transparent"};

  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

export const Button = styled.button`
  background-color: ${colors.gray[800]};
  padding: 0.8rem 0.7rem;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${colors.white};
  transition: .2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray[500]};
  }
`;

export const IconStyle = css`
  font-size: 30px;
  cursor: pointer;
`;

export const Name = styled.h3`
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 600;
  font-family: ${fonts.primary};
  color: ${colors.gray[700]};
`;

export const PopoverSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: .2rem 0;
  font-size: 1rem;
  font-family: ${fonts.primary};
  font-weight: 500;
  color: ${colors.gray[700]};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: .2s ease-in;

  &:hover {
    background-color: ${colors.gray[200]};
  }
`;
