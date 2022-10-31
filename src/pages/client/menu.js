import { useEffect, useState } from "react";
import { Button } from "../../components/NavBar/styles";
import { Section } from "../../AuthAppAdmin";
import CategoryCard from "../../components/CategoryCard";
import { get, post } from "../../services";
import Loader from "../admin/Loader";
import { Categories, Dishes, FlexRow, Title } from "../admin/styles";
import { useAuth } from "../../context/auth";
import { Button as BtnBootstrap} from "reactstrap";
import { colors } from "../../styles";
import DishCard from "../../components/DishCard";
import TableCard from "../../components/TableCard";
import OrderComplete from "../../components/OrderComplete";

function MenuPage({ setModal }) {
  const { user, setError, setUser } = useAuth();
  const [categories, setCategories] = useState([]);
  const [dataDishes, setDataDishes] = useState({ main: [], backup: [] });
  const [tables, setTables] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);
  const [selectableMode, setSelectableMode] = useState("initial");
  const [data, setData] = useState({items: []});

  const clickInitSelectableMode = async () => {
    const tablResponse = await get("tables");
    setTables(tablResponse);
    setSelectableMode("dishes"); 
    setData({
      ...data,
      user_id: user.id,
      table_id: "",
    });
  }

  const clickWithoutLogin = () => {
    setError("Primero debes iniciar sesión o registrate");
    setModal(true);
  }

  const clickCancel = () => {
    if(selectableMode === "dishes") {
      setSelectableMode("initial");
      setData({...data, items: []});
    }else if(selectableMode === "table") {
      setSelectableMode("dishes");
    }
  }

  const clickContinue = async () => {
    if(selectableMode === "dishes") {
      setSelectableMode("table");
    }else if(selectableMode === "table") {
      try {
        const response = await post("orders", data);
        setData({...data, total: response.total});
        setSelectableMode("success");
        setUser(user => ({...user, intake: user.intake + response.total}));
      }catch(e) {
        setSelectableMode("error");
      }
    }
  }

  const handleDishCard = (dish_id, name, image, price) => {
    if(selectableMode === "initial") return;
    const item = data.items.find(item => item.dish_id === dish_id);
    if(item) {
      const newItems = data.items.filter(item => item.dish_id !== dish_id);
      setData({...data, items: newItems});
    }else {
      setData({...data, items: [...data.items, { dish_id: dish_id, price: price, quantity: 1, name: name, image: image }] });
    }
  }

  useEffect(() => {
    async function fetch() {
      const catResponse = await get("categories");
      const dishResponse = await get("dishes");
      setCategories(catResponse);
      setDataDishes({ main: dishResponse, backup: dishResponse });
      setTimeout(() => setIsLoading(false), 500);
    }

    fetch();
  }, []);

  return (
    <Section
      style={{minHeight: "100vh"}}
    >
      {
        isLoading
        ?
          <Loader />
        :
          <>
            {
              selectableMode === "success"
              ?
                <OrderComplete 
                  isSuccess
                  items={data.items}
                  setSelectableMode={setSelectableMode}
                  total={data.total}
                />
              :
                (
                  selectableMode === "error"
                  ?
                    <OrderComplete 
                      setSelectableMode={setSelectableMode}
                    />
                  :
                  <>
                    <Title>
                    {
                      selectableMode === "initial"
                      ?
                        "Carta"
                      :
                        (
                          selectableMode === "dishes"
                          ?
                            "Elige tus platillos"
                          :
                            "Elige tu mesa"
                        )
                    }
                    </Title>
                    {
                      selectableMode === "table"
                      ?
                        null
                      :
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
                                key={category.id}
                                setParent={setDataDishes}
                                setCategory={setCurrentCategory}
                                currentCategory={currentCategory}
                                name={category.name}
                                filter={(dish) => dish.category_name === category.name}
                              />
                            ))
                          }
                        </Categories>
                    }
                    <FlexRow>
                      {
                        selectableMode === "initial"
                        ?
                          <Button
                            onClick={() => !user ? clickWithoutLogin() : clickInitSelectableMode()}
                          >
                            Reservar
                          </Button>
                        :
                          <>
                            <BtnBootstrap
                              disabled={data.items.length <= 0 || (selectableMode === "table" && !data.table_id)}
                              onClick={() => clickContinue()}
                              style={{fontWeight: 600, color: colors.white}}
                              color="info"
                            >
                              {
                                selectableMode === "dishes"
                                ?
                                  "Siguiente"
                                :
                                  "Finalizar"
                              }
                            </BtnBootstrap>
                            <BtnBootstrap
                              onClick={() => clickCancel()}
                              style={{fontWeight: 600, color: colors.white}}
                              color="danger"
                            >
                              {
                                selectableMode === "dishes"
                                ?
                                  "Cancelar"
                                :
                                  "Retroceder"
                              }
                            </BtnBootstrap>
                          </>
                      }
                    </FlexRow>
                    <Dishes>
                      {
                        selectableMode === "table"
                        ?
                          tables.filter(table => table.available).map(table => (
                            <TableCard
                              isClient
                              onClick={() => setData({...data, table_id: table.id})}
                              isSelect={data.table_id === table.id}
                              activeSelect={selectableMode !== "initial"}
                              key={table.id}
                              id={table.id}
                              photo={table.image}
                              pavilion={table.pavilion}
                              code={table.code}
                            />
                          ))
                        :
                          dataDishes.main.map(dish => (
                            <DishCard
                              onClick={() => handleDishCard(dish.id, dish.name, dish.image, dish.price)}
                              isSelect={data.items.find(item => item.dish_id === dish.id)}
                              activeSelect={selectableMode !== "initial"}
                              isClient
                              key={dish.id}
                              id={dish.id}
                              description={dish.description}
                              name={dish.name}
                              photo={dish.image}
                              price={dish.price}
                              quantity={dish.quantity}
                              waiting={dish.waiting_time}
                            />
                          ))
                      }
                    </Dishes>
                </>
              )
            }          
          </>
      }
    </Section>
  );
}

export default MenuPage;
