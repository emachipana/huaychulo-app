import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.main`
  margin: 0 2rem;
  overflow: hidden;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 5rem auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 5%;
`;

export const SwiperStyle = css`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 480px;
    border-radius: 1rem;
    height: 400px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media screen and (max-width: 550px) {
    .swiper-slide {
      width: 350px;
      height: 250px;
    }

    .swiper-slide img {
      height: 250px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin: 2rem 1rem;
  padding: 1rem;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;
