import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 180px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 130px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
