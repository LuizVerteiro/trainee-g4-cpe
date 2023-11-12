import {
  Containner,
  Title,
  DivEmail,
  Email,
  DivNomeUser,
  NomeUser,
  DivSenha,
  Senha,
  Botton,
  Background,
  AlinhaBotton,
  InputModal,
  IconInput,
} from "./Styles";
import {
  MailOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Cadastro() {
  return (
    <>
      <Background>
        <Containner>
          <Title>Realizar Login</Title>
          <DivEmail>
            <Email> Email:</Email>
            <IconInput>
              <InputModal type="text" placeholder="exemplo@*****.com" />
              <MailOutlined />
            </IconInput>
          </DivEmail>
          <DivNomeUser>
            <NomeUser> Nome de Usuario:</NomeUser>
            <IconInput>
              <InputModal type="text" placeholder="Nome de usuário" />
              <UserOutlined />
            </IconInput>
          </DivNomeUser>
          <DivSenha>
            <Senha> Senha:</Senha>
            <IconInput>
              <InputModal type="password" placeholder="*****************" />
              <KeyOutlined />
            </IconInput>
          </DivSenha>
          <AlinhaBotton>
            <Botton> Entrar</Botton>
          </AlinhaBotton>
        </Containner>
      </Background>
    </>
  );
}

export default Cadastro;
