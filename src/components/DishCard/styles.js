import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 230px;
  height: ${({ table, isClient }) => table || isClient ? ( isClient && table ? 220 : 255) : 310}px;
  padding:  ${({ table }) => table ? "0.5rem 1rem" : "0.5rem 0.7rem" };
  margin-top: 5rem;
  background-color: ${colors.white};
  position: relative;
  border-radius: 1.2rem;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, .2);
  cursor: pointer;
  transition: .2s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ isSelect }) => isSelect ? "#035afc" : colors.white};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, .2);
  }
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
  top: -25%;
  box-shadow: rgb(0 0 0 / 20%) 0px 20px 20px;
  border: ${({ isSelect }) => isSelect ? "2px solid #035afc" : "none"};
`;

export const Info = styled.div`
  margin-top: ${({ isClient, table }) => isClient && table ? 55 : (!isClient && !table ? 40 : 45)}%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.h3`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

export const Description = styled.p`
  text-align: start;
  font-size: 14px;
  font-weight: 500;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
  margin: 6px 0;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
`;

export const IconStyle = css`
  font-size: 18px;
  position: relative;
  top: -1px;
`;

export const ButtonStyle = css`
  width: 30px;
  height: 30px;
`;

export const ContainerScroll = styled.div`
  height: 60px;
  width: 100%;
  overflow: auto;
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #035afc;
  background-color: ${({ isSelect }) => isSelect ? "#035afc" : colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  padding: 3px;
`;
