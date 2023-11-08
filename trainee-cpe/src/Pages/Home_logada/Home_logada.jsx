import { DivHeader } from "../Cadastro/Styles";
import {
  DivAvisos,
  DivLogo,
  DivText,
  Container,
  DivOla,
  Titulo,
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
  Texto,
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
        <Titulo>Olá Taylor Swift!</Titulo>
        <Login> Login </Login>
      </DivOla>

      <Linha>
        <DivAvisos>
          <Titulo>Avisos</Titulo>
          <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            posuere nunc. Etiam lacinia arcu laoreet ligula dictum, at luctus.
          </Texto>
        </DivAvisos>
        <DivAjuda>
          <Titulo>Precisa de ajuda?</Titulo>
          <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            posuere nunc. Etiam lacinia arcu laoreet ligula dictum, at luctus.
          </Texto>
        </DivAjuda>
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
