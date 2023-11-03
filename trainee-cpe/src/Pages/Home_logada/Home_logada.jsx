import { DivHeader } from "../Cadastro/Styles";
import { DivAvisos, DivLogo } from "./Styles";
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

      <DivAvisos></DivAvisos>
    </Container>
  );
}
export default Home_logada;
