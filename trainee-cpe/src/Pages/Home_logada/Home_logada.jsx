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
  Tabela,
  DivHeaderTabela,
  DivCorpoTabela,
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

      <Tabela>
        <DivHeaderTabela>
          <div>Usuário</div>
          <div>Atividade</div>
          <div>Tempo ativo</div>
        </DivHeaderTabela>
        <DivCorpoTabela>
          <div>Usuário 1</div>
          <div>Escutando Taylor</div>
          <div>1:08h</div>
        </DivCorpoTabela>
      </Tabela>
    </Container>
  );
}
export default Home_logada;
