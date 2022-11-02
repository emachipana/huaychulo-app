/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Section, SwiperStyle, Text, Wrapper } from "./styles";
import { Title } from "../admin/styles";

function AboutPage() {
  const photos = [
    { src: "./img/banner.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/zhR8PZn/huaychulo-7.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/Wc8B7Lj/huaychulo-6.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/Hh2YFDC/huaychulo4.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/fDNjXQj/huaychulo-5.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/Rjk6v41/huaychulo3.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/tK8NVfF/huaychulo2.jpg", alt: "about-image" },
    { src: "https://i.ibb.co/pXdvKpk/huaychulo1.jpg", alt: "about-image" }
  ]

  return (
    <Section>
      <Title>Galería de fotos</Title>
        <Swiper
          css={SwiperStyle}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true
          }}
          modules={[EffectCoverflow]}
        >
          {
            photos.map((photo, index) => (
              <SwiperSlide
                key={index}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Wrapper>
          <div
            style={{maxWidth: "520px"}}
          >
            <Title>Misión</Title>
            <Text>
              Dar un servicio de alimentación gourmet al cliente con todos
              los estándares de higiene y suprema calidad, allí donde este
              lo necesite. Entregar un servicio de rapidez, a buenos precios,
              de excelente calidad, sabor y frescura.
            </Text>
          </div>
          <div
            style={{maxWidth: "520px"}}
          >
            <Title>Visión</Title>
            <Text>
              Ser reconocidos por el arduo trabajo que entregamos al
              comensal para poder ser uno de los mejores restaurantes a
              nivel nacional.
            </Text>
          </div>
        </Wrapper>
    </Section>
  )
}

export default AboutPage;
