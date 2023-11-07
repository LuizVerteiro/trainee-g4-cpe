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
  HeaderTabela,
  LinhaTabela,
  Usuario,
  Cargo,
  Atividade,
  Nome,
  TempoAtivo,
} from "./Styles";
import ImageLogo from "../../Assets/Logo.png";

function Home_logada() {
  const seções = [
    {
      nome: "Mateus",
      cargo: "Manutenção",
      atividade: "Monitoria",
      tempoAtivo: "01:08",
    },

    {
      nome: "Isabel",
      cargo: "Atendimento ao cliente",
      atividade: "Estudando",
      tempoAtivo: "03:18",
    },
  ];
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
        <HeaderTabela>
          <div>Usuário</div>
          <div>Atividade</div>
          <div>Tempo ativo</div>
        </HeaderTabela>
        {seções.map(function (seção) {
          return (
            <LinhaTabela>
              <Usuario>
                <Nome>{seção.nome}</Nome>
                <Cargo>{seção.cargo}</Cargo>
              </Usuario>
              <Atividade>{seção.atividade}</Atividade>
              <TempoAtivo>{seção.tempoAtivo}</TempoAtivo>
            </LinhaTabela>
          );
        })}
      </Tabela>
    </Container>
  );
}
export default Home_logada;
