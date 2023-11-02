import { Container } from "./Styles";
import { DivHeader } from "../Cadastro/Styles";
import { DivLogo } from "../Cadastro/Styles";
import { DivText } from "../Cadastro/Styles";

function Home() {
  return (
    <Container>
      <DivHeader>
        <DivLogo>
          <DivText>Essa e a pagina home</DivText>
        </DivLogo>
      </DivHeader>
    </Container>
  );
}
export default Home;
