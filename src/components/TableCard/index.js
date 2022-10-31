/** @jsxImportSource @emotion/react */
import { ButtonStyle, CheckBox, Container, FlexRow, IconStyle, Info, Name, Photo, Section } from "../DishCard/styles";
import { RiAncientPavilionFill } from "react-icons/ri";
import { AiOutlineQrcode } from "react-icons/ai";
import { GiOfficeChair } from "react-icons/gi";
import { Button } from "reactstrap";
import { TiEdit } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";

function TableCard({ id, photo, pavilion, activeSelect, isSelect, code, chairs, isClient, setOpen, setEditableItem, ...other }) {
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
      table
      isClient={isClient}
      isSelect={isSelect}
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
        alt="photo-table"
      />
      <Info
        isClient={isClient}
        table
      >
        <Name>{ pavilion + code }</Name>
        <FlexRow>
          <Section>
            <RiAncientPavilionFill 
              css={IconStyle}
            />
            { pavilion }
          </Section>
          <Section>
            <AiOutlineQrcode 
              css={IconStyle}
            />
            { code }
          </Section>
          <Section>
            <GiOfficeChair 
              css={IconStyle}
            />
            { chairs }
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

export default TableCard;
