/** @jsxImportSource @emotion/react */
import { ButtonStyle, Container, Description, FlexRow, IconStyle, Info, Name, Photo, Section } from "./styles";
import { TbCoffee } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiJigsawBox } from "react-icons/gi";
import { Button } from "reactstrap";
import { TiEdit } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";

function DishCard({ photo, name, description, quantity, price, waiting }) {
  return (
    <Container>
      <Photo 
        src={photo}
        alt="photo-dish"
        />
      <Info>
        <Name>{ name }</Name>
        <Description>{ description }</Description>
        <FlexRow>
          <Section>
            <RiMoneyDollarCircleFill
              css={IconStyle}
            />
            { `S/. ${price}.00` }
          </Section>
          <Section>
            <TbCoffee
              css={IconStyle}
            />
            { waiting + " min."}
          </Section>
          <Section>
            <GiJigsawBox
              css={IconStyle}
            />
            { quantity }
          </Section>
        </FlexRow>
        <hr 
          style={{width: "100%", margin: "0.5rem"}}
        />
        <Section
          style={{alignSelf: "end"}}
        >
          <Button
            css={ButtonStyle}
            color="warning"
          >
            <TiEdit 
              size="20px"
              color="#F5F5F5"
              style={{position: "relative", left: "-200%", top: "-30%"}}
            />
          </Button>
          <Button
            css={ButtonStyle}
            color="danger"
          >
            <HiOutlineTrash 
              size="20px"
              style={{position: "relative", left: "-200%", top: "-30%"}}
            />
          </Button>
        </Section>
      </Info>
    </Container>
  );
}

export default DishCard;
