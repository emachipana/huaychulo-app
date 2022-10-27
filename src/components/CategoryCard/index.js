/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Button } from "reactstrap";
import { ButtonStyle, Container, Options } from "./styles";
import { TiEdit } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";
import { colors } from "../../styles";

function CategoryCard({ id, name, setParent, backup, setCategory, currentCategory, setEditOpen, setDeleteOpen, setEditableName }) {
  const [isHover, setIsHover] = useState(false);

  const handleSet = () => {
    setCategory(name);
    if(name === "Todos") return setParent(backup);
    setParent(backup.filter(dish => dish.category_name === name));
  }

  const handleEditOpen = () => {
    setEditOpen(true);
    setEditableName({ name: name, id: id });
  }

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
    setEditableName({id: id});
  }

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      active={currentCategory === name}
      onClick={() => handleSet()}
    >
      { name }
      {
        name === "Todos"
        ?
          null
        :
          <Options
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
    </Container>
  );
}

export default CategoryCard;
