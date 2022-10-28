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
import DishFormModal from "../../components/DishFormModal";

function DishesPage() {
  const [categories, setCategories] = useState([]);
  const [dataDishes, setDataDishes] = useState({ main: [], backup: [] });
  const [currentCategory, setCurrentCategory] = useState("Todos");
  const [isLoading, setIsLoding] = useState(true);
  const [categoryModal, setCategoryModal] = useState({ edit: false, delete: false });
  const [dishModal, setDishModal] = useState({ edit: false, delete: false });
  const [editableItem, setEditableItem] = useState(null);

  useEffect(() => {
    async function fetch() {
      const catResponse = await get("categories");
      const dishResponse = await get("dishes");
      setCategories(catResponse);
      setDataDishes({ main: dishResponse, backup: dishResponse });
      setTimeout(() => setIsLoding(false), 500);
    }

    fetch();
  }, []);

  const handleDeleteCategory = (id) => {
    setCategories(categories => categories.filter(category => category.id !== id));
  }

  const handleDeleteDish = (id) => {
    setDataDishes(dishes => {
      const newDishes = dishes.backup.filter(dish => dish.id !== id);
      return { main: newDishes, backup: newDishes }
    });
  }

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
                all
              />
              {
                categories.map(category => (
                  <CategoryCard
                    id={category.id}
                    setOpen={setCategoryModal}
                    setEditableName={setEditableItem}
                    setParent={setDataDishes}
                    key={category.id}
                    name={category.name}
                    setCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    filter={(dish) => dish.category_name === category.name}
                    editable
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
                onClick={() => setDishModal(modal => ({...modal, edit: !modal.edit}))}
                style={{alignSelf: "end"}}
              >
                Agregar Platillo
              </Button>
            </FlexRow>
            <Dishes>
              {
                dataDishes.main.map(dish => (
                  <DishCard
                    key={dish.id}
                    id={dish.id}
                    quantity={dish.quantity}
                    name={dish.name}
                    photo={dish.image}
                    description={dish.description}
                    price={dish.price}
                    waiting={dish.waiting_time}
                    setOpen={setDishModal}
                    setEditableItem={setEditableItem}
                  />
                ))
              }
            </Dishes>
            <CategoryFormModal 
              handleClose={() => setCategoryModal(modal => ({...modal, edit: !modal.edit}))}
              editableName={editableItem}
              isOpen={categoryModal.edit}
              setParent={setCategories}
              title={editableItem ? "Editar" : "Agregar"}
              setEditableName={setEditableItem}
            />
            <DishFormModal 
              categories={categories}
              dishes={dataDishes.backup}
              editableItem={editableItem}
              isOpen={dishModal.edit}
              onClose={() => setDishModal(modal => ({...modal, edit: !modal.edit}))}
              setParent={setDataDishes}
              setEditableItem={setEditableItem}
              title={editableItem ? "Editar" : "Agregar"}
            />
            <DeleteModal 
              title="categoría"
              description="¿Estas seguro de eliminar esta categoría? Recuerda que si eliminas esta categoría tambien se eliminarán los platillos asociados."
              endpoint="categories"
              id={editableItem?.id}
              handleClose={() => setCategoryModal(modal => ({...modal, delete: !modal.delete}))}
              isOpen={categoryModal.delete}
              setName={setEditableItem}
              handleSetDelete={handleDeleteCategory}
            />
            <DeleteModal 
              title="platillo"
              description="¿Estas seguro de eliminar este platillo? Recuerda que si eliminas este platillo no habrá vuelta a atrás."
              id={editableItem?.id}
              handleClose={() => setDishModal(modal => ({...modal, delete: !modal.delete}))}
              isOpen={dishModal.delete}
              setName={setEditableItem}
              handleSetDelete={handleDeleteDish}
              endpoint="dishes"
            />
          </>
      }
    </>
  )
}

export default DishesPage;
