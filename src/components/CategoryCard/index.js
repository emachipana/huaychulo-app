/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button } from "reactstrap";
import { ButtonStyle, Container, Options, Wrapper } from "./styles";
import { TiEdit } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";
import { colors } from "../../styles";

function CategoryCard({ id, name, all, setParent, setCategory, currentCategory, filter, setOpen, setEditableName, editable }) {
  const [isHover, setIsHover] = useState(false);

  const handleSet = () => {
    setCategory(name);
    if(all) return setParent(data => ({...data, main: data.backup}));
    setParent(data => ({...data, main: data.backup.filter(element => filter(element))}));
  }

  const handleEditOpen = () => {
    setOpen(modal => ({...modal, edit: true}));
    setEditableName({ name: name, id: id });
  }

  const handleDeleteOpen = () => {
    setOpen(modal => ({...modal, delete: true}));
    setEditableName({id: id});
  }

  return (
    <Wrapper>
      <Container
        isHover={!isHover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        active={currentCategory === name}
        onClick={() => handleSet()}
      >
        { name }
      </Container>
        {
          !editable
          ?
            null
          :
            <Options
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              isHover={isHover}
            >
              <Button
                onClick={() => handleEditOpen()}
                css={ButtonStyle}
                color="warning"
              >
                <TiEdit
                  color={colors.white}
                  size="18px"
                />
              </Button>
              <Button
                onClick={() => handleDeleteOpen()}
                css={ButtonStyle}
                color="danger"
              >
                <HiOutlineTrash 
                  size="16px"
                />
              </Button>
            </Options>
        }
    </Wrapper>
  );
}

export default CategoryCard;
