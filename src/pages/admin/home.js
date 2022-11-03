import Card from "../../components/Card";
import { FlexRow } from "./styles";
import { useEffect, useState } from "react";
import { get } from "../../services";
import Loader from "./Loader";
import { TbReportMoney, TbReportAnalytics } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import { GiTable } from "react-icons/gi";
import SocialCard from "../../components/SocialCard";
import UsersInfo from "../../components/UsersInfo";

function HomePage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const orders = await get("orders");
      const dishes = await get("dishes");
      const tables = await get("tables");
      const users = await get("users");
      
      setData({
        income: orders.filter(order => order.status !== "cancelled").reduce((prev, cur) => prev + cur.total, 0),
        dishes: dishes.length,
        tables: tables.filter(dish => dish.available).length,
        booking: orders.filter(order => order.status === "pending").length,
        users: users
      });

      setIsLoading(false);
    }

    fetch();
  }, []);

  return (
    <>
      {
        isLoading
        ?
          <Loader />
        :
          <>
            <FlexRow
              style={{justifyContent: "center"}}
            >
              <Card
                to="/ordenes"
                color="#321FDB"
                name="Ingresos"
                Icon={TbReportMoney}
                num={`S/. ${data.income}.00`}
              />
              <Card
                to="/platillos"
                color="#5199FF"
                name="Platillos"
                Icon={IoFastFood}
                num={data.dishes}
              />
              <Card
                to="/mesas"
                color="#F2B115"
                name="Mesas disponibles"
                Icon={GiTable}
                num={data.tables}
              />
              <Card
                to="/reservas"
                color="#E55353"
                name="Reservas"
                Icon={TbReportAnalytics}
                num={data.booking}
              />
            </FlexRow>
            <UsersInfo 
              users={data.users}
            />
            <FlexRow
              style={{justifyContent: "center"}}
            >
              <SocialCard
                firstNum="20"
                secNum="40"
                type="facebook"
              />
              <SocialCard
                firstNum="5"
                secNum="10"
                type="twitter"
              />
              <SocialCard
                firstNum="500"
                secNum="37"
                type="linkedin"
              />
            </FlexRow>
          </>
      }
    </>
  );
}

export default HomePage;
