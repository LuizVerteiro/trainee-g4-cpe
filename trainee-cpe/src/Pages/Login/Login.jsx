import { useState } from "react";
import {
  Title,
  Campo,
  Label,
  Form,
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
import useAuthStore from "../../stores/auth";
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault(); //para não atualizar a pag

    try {
      setCarregando(true);
      const res =  await api.post("/login", {email, nome, senha});
      const {token} = res.data;

      setToken(token);
      navigate("/");
    } catch (error) {
      console.error(erro);
      alert(erro.response.data.message);
    }finally{
      setCarregando(false);
    }
  };

  if(carregando) return(
    <Background>
      <h1>Carregando...</h1>
    </Background>
  )

  return (
    <>
      <Background>
          <Form onSubmit={handleSubmit}>
          <Title>Realizar Login</Title>
          <Campo>
            <Label htmlFor="email"> Email:</Label>
            <IconInput>
              <InputModal type="email" name="email" id="email" placeholder="exemplo@*****.com" required onChange={(e) => setEmail(e.target.value)} />
              <MailOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label htmlFor="nome"> Nome de usuario:</Label>
            <IconInput>
              <InputModal type="text" name="nome" id="nome" placeholder="Nome de usuário" required onChange={(e) => setNome(e.target.value)} />
              <UserOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label htmlFor="senha"> Senha:</Label>
            <IconInput>
              <InputModal type="password" name="senha" id="senha" placeholder="*****************" required onChange={(e) => setSenha(e.target.value)} />
              <KeyOutlined />
            </IconInput>
          </Campo>
          <AlinhaBotton>
            <Botton type="submit"> Entrar</Botton>
          </AlinhaBotton>
          </Form>
      </Background>
    </>
  );
}

export default Login;
