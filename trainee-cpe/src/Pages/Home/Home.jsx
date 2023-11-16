import { useNavigate } from "react-router-dom";
import {
  Container,
  Firstpart,
  ButtonEntrar,
  Title,
  SecondPart,
  Title2,
  ButtonCadastro,
} from "./Styles";
function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Firstpart>
        <Title> Já tem uma conta?</Title>
        <ButtonEntrar onClick={() => navigate("/Login")}>Entrar</ButtonEntrar>
      </Firstpart>
      <SecondPart>
        <Title2>Ou cadastre-se:</Title2>
        <ButtonCadastro onClick={() => navigate("/Cadastro")}>
          Cadastre-se
        </ButtonCadastro>
      </SecondPart>
    </Container>
  );
}
export default Home;
