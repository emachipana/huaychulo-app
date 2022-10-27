import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import { NewCategory } from "../../components/CategoryCard/styles";
import { get } from "../../services";
import Loader from "./Loader";
import { Categories, Dishes, FlexRow, Title } from "./styles";
import { FaPlus } from "react-icons/fa";
import CategoryFormModal from "../../components/CategoryFormModal";
import DeleteModal from "../../components/DeleteModal";
import { Button } from "../../components/NavBar/styles";
import DishCard from "../../components/DishCard";

function DishesPage() {
  const [categories, setCategories] = useState([]);
  const [dataDishes, setDataDishes] = useState({ dishes: [], backup: [] });
  const [currentCategory, setCurrentCategory] = useState("Todos");
  const [isLoading, setIsLoding] = useState(true);
  const [categoryModal, setCategoryModal] = useState({ edit: false, delete: false });
  const [editableCategory, setEditableCategory] = useState(null);

  useEffect(() => {
    async function fetch() {
      const catResponse = await get("categories");
      const dishResponse = await get("dishes");
      setCategories(catResponse);
      setDataDishes({ dishes: dishResponse, backup: dishResponse });
      setTimeout(() => setIsLoding(false), 500);
    }

    fetch();
  }, []);

  console.log(dataDishes.dishes);

  return (
    <>
      {
        isLoading
        ?
          <Loader />
        :
          <>
            <Title>Platillos</Title>
            <Categories>
              <CategoryCard 
                setParent={setDataDishes}
                setCategory={setCurrentCategory}
                currentCategory={currentCategory}
                name="Todos"
              />
              {
                categories.map(category => (
                  <CategoryCard
                    id={category.id}
                    setOpen={setCategoryModal}
                    type="edit"
                    setEditableName={setEditableCategory}
                    setParent={setDataDishes}
                    key={category.id}
                    name={category.name}
                    setCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                  />
                ))
              }
            <NewCategory
              onClick={() => setCategoryModal(modal => ({...modal, edit: !modal.edit}))}
            >
              <FaPlus 
                size="19px"
              />
            </NewCategory>
            </Categories>
            <FlexRow>
              <Button
                style={{alignSelf: "end"}}
              >
                Agregar Platillo
              </Button>
            </FlexRow>
            <Dishes>
              {
                dataDishes.dishes.map(dish => (
                  <DishCard
                    key={dish.id}
                    quantity={dish.quantity}
                    name={dish.name}
                    photo={dish.image}
                    description={dish.description}
                    price={dish.price}
                    waiting={dish.waiting_time}
                  />
                ))
              }
            </Dishes>
            <CategoryFormModal 
              handleClose={() => setCategoryModal(modal => ({...modal, edit: !modal.edit}))}
              editableName={editableCategory}
              isOpen={categoryModal.edit}
              setParent={setCategories}
              title={editableCategory ? "Editar" : "Agregar"}
              setEditableName={setEditableCategory}
            />
            <DeleteModal 
              title="categoría"
              description="¿Estas seguro de eliminar esta categoría? Recuerda que si eliminas esta categoría tambien se eliminarán los platillos asociados."
              endpoint="categories"
              id={editableCategory?.id}
              handleClose={() => setCategoryModal(modal => ({...modal, delete: !modal.delete}))}
              isOpen={categoryModal.delete}
              setName={setEditableCategory}
              setParent={setCategories}
            />
          </>
      }
    </>
  )
}

export default DishesPage;
