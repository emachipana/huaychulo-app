import { Container, Description, Icons, Img, Title } from "./styles";

function CardInfo({ IconRight, IconCenter, IconLeft, title, description }) {
  return (
    <Container>
      <Icons>
        {
          IconRight
          ?
          <Img
            right
          >
            <IconRight />
          </Img>
          :
          null
        }
        <Img
          center
        >
          <IconCenter />
        </Img>
        <Img
          left
        >
          <IconLeft />
        </Img>
      </Icons>
      <Title>{ title }</Title>
      <Description>{ description }</Description>
    </Container>
  );
}

export default CardInfo;
