import {
  Containner,
  Title,
  DivNomeUser,
  NomeUser,
  DivDepartamento,
  Departamento,
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
  UserOutlined,
} from "@ant-design/icons";

function Cadastro() {
  return (
    <>
      <Background>
        <Containner>
          <Title>Editar Perfil</Title>
          <DivNomeUser>
            <NomeUser> Novo nome:</NomeUser>
            <IconInput>
              <InputModal type="text" placeholder="Nome de usuário" />
              <UserOutlined />
            </IconInput>
          </DivNomeUser>
          <DivDepartamento>
            <Departamento> Novo departamento:</Departamento>
            <IconInput>
              <SelectModal>
                <option value="departamento1">Departamento A</option>
                <option value="departamento2">Departamento B</option>
                <option value="departamento3">Departamento C</option>
              </SelectModal>
            </IconInput>
          </DivDepartamento>
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
            <Botton> Editar</Botton>
          </AlinhaBotton>
        </Containner>
      </Background>
    </>
  );
}

export default Cadastro;
