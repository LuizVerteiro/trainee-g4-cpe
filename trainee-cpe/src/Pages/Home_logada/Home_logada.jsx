import { DivHeader } from "../Cadastro/Styles";
import {
  DivAvisos,
  DivLogo,
  DivText,
  Container,
  DivOla,
  OlaTexto,
  Login,
  Linha,
  DivAjuda,
  DivHeaderTabela,
} from "./Styles";
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
      <DivOla>
        <OlaTexto>Olá Taylor Swift!</OlaTexto>
        <Login> Login </Login>
      </DivOla>

      <Linha>
        <DivAvisos>oi</DivAvisos>
        <DivAjuda>Oiiiiiiiii</DivAjuda>
      </Linha>

      <DivHeaderTabela>
        <div>Usuário</div>
        <div>Atividade</div>
        <div>Tempo ativo</div>
      </DivHeaderTabela>
    </Container>
  );
}
export default Home_logada;
