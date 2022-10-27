import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import { NewCategory } from "../../components/CategoryCard/styles";
import { get } from "../../services";
import Loader from "./Loader";
import { Categories, Title } from "./styles";
import { FaPlus } from "react-icons/fa";
import CategoryFormModal from "../../components/CategoryFormModal";
import DeleteModal from "../../components/DeleteModal";

function DishesPage() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [backup, setBackup] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Todos");
  const [isLoading, setIsLoding] = useState(true);
  const [categoryModal, setCategoryModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editableCategory, setEditableCategory] = useState(null);

  useEffect(() => {
    async function fetch() {
      const catResponse = await get("categories");
      const dishResponse = await get("dishes");
      setCategories(catResponse);
      setDishes(dishResponse);
      setBackup(dishResponse);
      setTimeout(() => setIsLoding(false), 500);
    }

    fetch();
  }, []);

  console.log(dishes);

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
                setParent={setDishes}
                backup={backup}
                setCategory={setCurrentCategory}
                currentCategory={currentCategory}
                name="Todos"
              />
              {
                categories.map(category => (
                  <CategoryCard
                    id={category.id}
                    setEditOpen={setCategoryModal}
                    setDeleteOpen={setDeleteModal}
                    setEditableName={setEditableCategory}
                    setParent={setDishes}
                    backup={backup}
                    key={category.id}
                    name={category.name}
                    setCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                  />
                ))
              }
            <NewCategory
              onClick={() => setCategoryModal(!categoryModal)}
            >
              <FaPlus 
                size="19px"
              />
            </NewCategory>
            </Categories>
            <CategoryFormModal 
              handleClose={() => setCategoryModal(!categoryModal)}
              editableName={editableCategory}
              isOpen={categoryModal}
              setParent={setCategories}
              title={editableCategory ? "Editar" : "Agregar"}
              setEditableName={setEditableCategory}
            />
            <DeleteModal 
              title="categoría"
              description="¿Estas seguro de eliminar esta categoría? Recuerda que si eliminas esta categoría tambien se eliminarán los platillos asociados."
              endpoint="categories"
              id={editableCategory?.id}
              handleClose={() => setDeleteModal(!deleteModal)}
              isOpen={deleteModal}
              setName={setEditableCategory}
              setParent={setCategories}
            />
          </>
      }
    </>
  )
}

export default DishesPage;
