import { useNavigate } from "react-router-dom";
import { colors } from "../../styles";
import Logo from "../NavBar/Logo";
import { Container, FlexRow, Item, Section, Subtitle, Text, Title, Wrapper } from "./styles";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { GiPisces, GiCancer, GiLeo, GiVirgo, GiTaurus } from "react-icons/gi";

function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Logo
          navigate={navigate}
          color={colors.white}
        />
        <Text>
          Somos un centro vacacional 4 
          estrellas contamos con un inmenso local
          con hermosos paisajes y juegos para los 
          mas pequeños, ademas de nuestra variedad
          de platillos preparados por los mejores
          chef's del valle del mantaro.
        </Text>
      </Section>
      <Section>
        <Title>Compañia</Title>
        <Wrapper>
          <Item>Acerca de</Item>
          <Item>Trabajos</Item>
          <Item>Procesos</Item>
          <Item>Servicios</Item>
        </Wrapper>
      </Section>
      <Section>
        <Title>Redes Sociales</Title>
        <Wrapper>
          <FlexRow>
            <FaFacebookSquare />
            <Item>Facebook</Item>
          </FlexRow>
          <FlexRow>
            <FaTwitterSquare />
            <Item>Twitter</Item>
          </FlexRow>
          <FlexRow>
            <FaLinkedin />
            <Item>Linkedln</Item>
          </FlexRow>
          <FlexRow>
            <FaInstagramSquare />
            <Item>Instagram</Item>
          </FlexRow>
        </Wrapper>
      </Section>
      <Section>
        <Title>Developers</Title>
        <Wrapper>
          <FlexRow>
            <GiLeo />
            <Item
              href="https://www.facebook.com/nickcesar.jaureguigerardini.9"
              target="_blank"
            >
              Nicer Jauregui
            </Item>
          </FlexRow>
          <FlexRow>
            <GiVirgo />
            <Item
              href="https://www.facebook.com/dennisdaniel.mallquilopez.9"
              target="_blank"
            >
              Denis Mallqui
            </Item>
          </FlexRow>
          <FlexRow>
            <GiTaurus />
            <Item
              href="https://www.facebook.com/reimerjunior.sotorojas.1"
              target="_blank"
            >
              Reimer Soto
            </Item>
          </FlexRow>
          <FlexRow>
            <GiPisces />
            <Item
              href="https://www.facebook.com/nayeli.tp.754"
              target="_blank"
            >
              Flor Taipe
            </Item>
          </FlexRow>
          <FlexRow>
            <GiCancer />
            <Item
              href="https://www.facebook.com/yamir.vs"
              target="_blank"
            >
              Jean Enmanuel
            </Item>
          </FlexRow>
        </Wrapper>
      </Section>
      <Subtitle>Todos los derechos reservados © 2022</Subtitle>
    </Container>
  );
}

export default Footer;
