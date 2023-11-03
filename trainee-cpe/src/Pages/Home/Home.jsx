import { Container } from "./Styles";
import { DivHeader } from "../Cadastro/Styles";
import { DivLogo } from "../Cadastro/Styles";
import { DivText } from "./Styles";

function Home() {
  return (
    <Container>
      <DivHeader>
        <DivLogo>
          <DivText>
            Assistec
          </DivText>
        </DivLogo>
      </DivHeader>
    </Container>
  );
}
export default Home;
