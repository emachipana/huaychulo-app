import { motion } from "framer-motion";
import InputSearch from "../InputSearch";
import { AnimateSection, Container, Title } from "./styles";

function Hero() {
  return (
    <Container>
      <AnimateSection
        as={motion.div}
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
      >
        <Title>Encuentra el platillo perfecto</Title>
        <InputSearch />
      </AnimateSection>
    </Container>
  )
}

export default Hero;
