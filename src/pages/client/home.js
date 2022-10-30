import CardInfo from "../../components/CardInfo";
import Hero from "../../components/Hero";
import { Container, Section, Title } from "./styles";
import { GiHamburger, GiCoffeeCup, GiMountainClimbing, GiMountainRoad, GiRiver } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { get } from "../../services";
import DishCard from "../../components/DishCard";

function HomePage() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response = await get("dishes");
      setDishes(response);
    }

    fetch();
  }, []);
  
  return (
    <>
      <Hero />
      <Container>
        <Section
          as={motion.section}
          initial={{x: "100%"}}
          animate={{x: "0"}}
          transition={{duration: 1}}
        >
          <CardInfo
            IconRight={GiCoffeeCup}
            IconCenter={GiHamburger}
            IconLeft={FaIceCream}
            description="Los mejores platillos de la mejor calidad de todo el valle del mantaro"
            title="Encuentra los mejores potajes"
          />
          <CardInfo
            IconRight={GiMountainRoad}
            IconCenter={GiMountainClimbing}
            IconLeft={GiRiver}
            description="Las mejores vistas en toda la zona, con juegos y asombrosos paisajes"
            title="Los mejores paisajes"
          />
          <CardInfo
            IconCenter={BiRestaurant}
            IconLeft={BsFillCalendarPlusFill}
            description="Haz reservaciones en línea desde cualquier parte del mundo"
            title="Reserva una mesa"
          />
        </Section>
        <Title>Lo más consumido hoy</Title>
        <Section>
          {
            dishes.sort(() => Math.random() - 0.5).slice(-4).map(dish => (
              <DishCard
                isClient
                key={dish.id}
                description={dish.description}
                id={dish.id}
                name={dish.name}
                photo={dish.image}
                price={dish.price}
                quantity={dish.quantity}
                waiting={dish.waiting_time}
              />
            ))
          }
        </Section>
      </Container>
    </>
  )
}

export default HomePage;
