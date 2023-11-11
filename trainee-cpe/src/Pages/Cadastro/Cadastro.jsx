import {
  Containner,
  Title,
  DivEmail,
  Email,
  DivNomeUser,
  NomeUser,
  DivSenha,
  Senha,
  DivConfirmSenha,
  ConfirmSenha,
  DivCargo,
  Cargo,
  Botton,
  Background,
  AlinhaBotton,
  InputModal,
  SelectModal,
  IconInput,
} from "./Styles";
import {
  MailOutlined,
  LockOutlined,
  KeyOutlined,
  UserOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

function Cadastro() {
  return (
    <>
      <Background>
        <Containner>
          <Title>Realizar Cadastro</Title>
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
          <DivConfirmSenha>
            <ConfirmSenha> Confirme sua senha:</ConfirmSenha>
            <IconInput>
              <InputModal type="password" placeholder="*****************" />
              <LockOutlined />
            </IconInput>
          </DivConfirmSenha>
          <DivCargo>
            <Cargo> Cargo:</Cargo>
            <IconInput>
              <SelectModal>
                <option value="cargo1">Cargo A</option>
                <option value="cargo2">Cargo B</option>
                <option value="cargo2">Cargo C</option>
              </SelectModal>
            </IconInput>
          </DivCargo>
          <AlinhaBotton>
            <Botton> Cadastrar</Botton>
          </AlinhaBotton>
        </Containner>
      </Background>
    </>
  );
}

export default Cadastro;
