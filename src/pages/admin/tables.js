import { get } from "../../services";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Categories, Dishes, FlexRow, Title } from "./styles";
import CategoryCard from "../../components/CategoryCard";
import TableCard from "../../components/TableCard";
import { Button } from "../../components/NavBar/styles";
import DeleteModal from "../../components/DeleteModal";
import TableFormModal from "../../components/TableFormModal";

function TablesPage() {
  const [dataTables, setDataTables] = useState({ main: [], backup: [] });
  const [currentCategory, setCurrentCategory] = useState("Todas");
  const [modal, setModal] = useState({ edit: false, delete: false });
  const [isLoading, setIsLoading] = useState(true);
  const [editableItem, setEditableItem] = useState(null);

  useEffect(() => {
    async function fetch() {
      const response = await get("tables");
      setDataTables({ main: response, backup: response });
      setTimeout(() => setIsLoading(false), 500);
    }

    fetch();
  }, []);

  const handleDeleteTable = (id) => {
    setDataTables(tables => {
      const newTables = tables.backup.filter(table => table.id !== id);
      return { main: newTables, backup: newTables };
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
            <Title>Mesas</Title>
            <Categories>
              <CategoryCard 
                setParent={setDataTables}
                setCategory={setCurrentCategory}
                currentCategory={currentCategory}
                name="Todas"
                all
              />
              <CategoryCard
                setParent={setDataTables}
                setCategory={setCurrentCategory}
                currentCategory={currentCategory}
                name="Disponible"
                filter={(table) => table.available === true}
              />
              <CategoryCard
                setParent={setDataTables}
                setCategory={setCurrentCategory}
                currentCategory={currentCategory}
                name="Ocupado"
                filter={(table) => table.available === false}
              />
            </Categories>
            <FlexRow
            >
              <Button
                onClick={() => setModal(modal => ({...modal, edit: !modal.edit}))}
                style={{alignSelf: "end"}}
              >
                Agregar Mesa
              </Button>
            </FlexRow>
            <Dishes>
              {
                dataTables.main.map(table => (
                  <TableCard 
                    key={table.id}
                    id={table.id}
                    photo={table.image}
                    pavilion={table.pavilion}
                    code={table.code}
                    chairs={table.chairs}
                    setOpen={setModal}
                    setEditableItem={setEditableItem}
                  />
                ))
              }
            </Dishes>
            <TableFormModal 
              editableItem={editableItem}
              isOpen={modal.edit}
              onClose={() => setModal(modal => ({...modal, edit: !modal.edit}))}
              setEditableItem={setEditableItem}
              setParent={setDataTables}
              tables={dataTables.backup}
              title={editableItem ? "Editar" : "Agregar"}
            />
            <DeleteModal 
              title="mesa"
              description="¿Estas seguro de eliminar esta mesa? Recuerda que si eliminas esta mesa no habrá vuelta a atrás."
              id={editableItem?.id}
              handleClose={() => setModal(modal => ({...modal, delete: !modal.delete}))}
              isOpen={modal.delete}
              setName={setEditableItem}
              handleSetDelete={handleDeleteTable}
              endpoint="tables"
            />
          </>
      }
    </>
  );
}

export default TablesPage;
