/** @jsxImportSource @emotion/react */
import { ButtonStyle, CheckBox, Container, ContainerScroll, Description, FlexRow, IconStyle, Info, Name, Photo, Section } from "./styles";
import { TbCoffee } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiJigsawBox } from "react-icons/gi";
import { Button } from "reactstrap";
import { TiEdit } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";

function DishCard({ id, photo, name, isSelect, isClient, activeSelect, description, quantity, price, waiting, setOpen, setEditableItem, ...other }) {
  const handleEditOpen = () => {
    setOpen(modal => ({...modal, edit: true}));
    setEditableItem({ id: id });
  }

  const handleDeleteOpen = () => {
    setOpen(modal => ({...modal, delete: true}));
    setEditableItem({ id: id });
  }

  return (
    <Container
      {...other}
      isSelect={isSelect}
      isClient={isClient}
    >
      {
        activeSelect
        ?
          <CheckBox 
            isSelect={isSelect}
          >
            {
              isSelect
              ?
                <BsCheckLg />
              :
                null
            }
          </CheckBox>
        :
          null
      }
      <Photo
        isSelect={isSelect}
        src={photo}
        alt="photo-dish"
        />
      <Info
        isClient={isClient}
      >
        <Name>{ name }</Name>
        <ContainerScroll>
          <Description>{ description }</Description>
        </ContainerScroll>
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
        {
          isClient
          ?
            null
          :
            <>
            
              <hr 
                style={{width: "100%", margin: "0.5rem"}}
              />
              <Section
                style={{alignSelf: "end"}}
              >
                <Button
                  onClick={handleEditOpen}
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
                  onClick={handleDeleteOpen}
                  css={ButtonStyle}
                  color="danger"
                >
                  <HiOutlineTrash 
                    size="20px"
                    style={{position: "relative", left: "-200%", top: "-30%"}}
                  />
                </Button>
              </Section>
            </>
        }
      </Info>
    </Container>
  );
}

export default DishCard;
