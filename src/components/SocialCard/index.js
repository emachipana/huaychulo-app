import { Container, Item, Logo, Section, Text, Title } from "./styles";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
 
function SocialCard({ type, firstNum, secNum }) {
  return (
    <Container>
      <Logo
        type={type}
      >
        {
          type === "facebook"
          ?
            <FaFacebookF
              size="40px"
            />
          :
            (
              type === "twitter"
              ?
                <FaTwitter
                  size="40px"
                />
              :
                <FaLinkedinIn
                  size="40px"
                />
            )
        }
      </Logo>
      <Section>
        <Item>
          <Title>{ firstNum }{type === "linkedin" ? "+" : "k"}</Title>
          <Text>{ type === "linkedin" ? "contacts" : "followers" }</Text>
        </Item>
        <hr 
          style={{transform: "rotate(90deg)", width: "20%"}}
        />
        <Item>
          <Title>{secNum}</Title>
          <Text>posts</Text>
        </Item>
      </Section>
    </Container>
  );
}

export default SocialCard;
