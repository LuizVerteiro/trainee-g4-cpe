import { useState } from "react";
import {
  Title,
  Form,
  Campo,
  Label,
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
} from "@ant-design/icons";
import api from "../../Services/api";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirm, setConfirm] = useState("");
  const [cargo, setCargo] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); //para não atualizar a pag
    try {
      setCarregando(true);
      const res = await api.post("/usuarios", {
        email,
        nome,
        senha,
        confirm,
        cargo,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setCarregando(false);
    }
  };

  if (carregando)
    return (
      <Background>
        <h1>Carregando...</h1>
      </Background>
    );

  return (
    <>
      <Background>
        <Form onSubmit={handleSubmit}>
          <Title>Realizar Cadastro</Title>
          <Campo>
            <Label htmlFor="email"> Email:</Label>
            <IconInput>
              <InputModal
                type="email"
                name="email"
                id="email"
                placeholder="exemplo@*****.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <MailOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label htmlFor="nome"> Nome de usuario:</Label>
            <IconInput>
              <InputModal
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome de usuário"
                required
                onChange={(e) => setNome(e.target.value)}
              />
              <UserOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label> Senha:</Label>
            <IconInput>
              <InputModal
                type="password"
                name="senha"
                id="senha"
                placeholder="*****************"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
              <KeyOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label> Confirme sua senha:</Label>
            <IconInput>
              <InputModal
                type="password"
                name="confirm"
                id="confirm"
                placeholder="*****************"
                required
                onChange={(e) => setConfirm(e.target.value)}
              />
              <LockOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label> Cargo:</Label>
            <IconInput>
              <SelectModal
                name="cargo"
                id="cargo"
                required
                onChange={(e) => setCargo(e.target.value)}
              >
                <option value="cargo1">Cargo A</option>
                <option value="cargo2">Cargo B</option>
                <option value="cargo2">Cargo C</option>
              </SelectModal>
            </IconInput>
          </Campo>
          <AlinhaBotton>
            <Botton type="submit"> Cadastrar</Botton>
          </AlinhaBotton>
        </Form>
      </Background>
    </>
  );
}

export default Cadastro;
