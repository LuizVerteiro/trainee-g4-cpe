import { DivHeader } from "../Cadastro/Styles";
import { DivLogo } from "./Styles";
import { DivText } from "./Styles";
import { Container } from "./Styles";
import ImageLogo from "../../Assets/Logo.png";

function Home_logada() {
  return (
    <Container>
      <DivHeader>
        <DivLogo>
          <img src={ImageLogo} alt="Logo" />
          <DivText>Assistec</DivText>
        </DivLogo>
      </DivHeader>
    </Container>
  );
}
export default Home_logada;
