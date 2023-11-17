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
  UsuarioHeader,
  AtividadeHeader,
  TempoHeader,
  LinhaTabela,
  Usuario,
  Cargo,
  Atividade,
  Nome,
  TempoAtivo,
  Texto,
  NomeCargo,
} from "./Styles";
import ImageLogo from "../../Assets/Logo.png";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Home_logada() {
  const navigate = useNavigate();
  const seções = [
    {
      nome: "Mateus",
      cargo: "Manutenção",
      atividade: "Monitoria",
      tempoAtivo: "01:08",
    },
    {
      nome: "Isabel",
      cargo: "Atendimento",
      atividade: "Estudando",
      tempoAtivo: "03:18",
    },
  ];
  return (
    <Container>
      <DivOla>
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
          <UsuarioHeader>Usuário</UsuarioHeader>
          <AtividadeHeader>Atividade</AtividadeHeader>
          <TempoHeader>Tempo ativo</TempoHeader>
        </HeaderTabela>
        {seções.map(function (seção) {
          return (
            <LinhaTabela key={seção.nome}>
              <Usuario>
                <img href="" />
                <NomeCargo>
                  <Nome>{seção.nome}</Nome>
                  <Cargo>{seção.cargo}</Cargo>
                </NomeCargo>
              </Usuario>
              <Atividade>{seção.atividade}</Atividade>
              <TempoAtivo>
                {seção.tempoAtivo}
                <LogoutOutlined style={{ color: "#EF3500" }} />
              </TempoAtivo>
            </LinhaTabela>
          );
        })}
      </Tabela>
    </Container>
  );
}
export default Home_logada;
