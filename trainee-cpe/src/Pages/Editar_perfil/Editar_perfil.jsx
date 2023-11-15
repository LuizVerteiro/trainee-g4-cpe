import { useState } from "react";
import {
  Title,
  Form,
  Label,
  Campo,
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

function Editar() {
  const [nome, setNome] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cargo, setCargo] = useState("");
  const [carregando, setCarregando] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault(); //para não atualizar a pag
    try {
      setCarregando(true);
      const res =  await api.post("/editar", {nome, departamento, cargo});
      console.log(res.data);
    } catch (error) {
      console.error(erro);
      alert(erro.message);
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
          <Title>Editar Perfil</Title>
          <Campo>
            <Label htmlFor="text"> Novo nome:</Label>
            <IconInput>
              <InputModal type="text" name="nome" id="nome" placeholder="Novo Nome" required onChange={(e) => setNome(e.target.value)}/>
              <UserOutlined />
            </IconInput>
          </Campo>
          <Campo>
            <Label> Novo departamento:</Label>
            <IconInput>
              <SelectModal
              name="departamento" id="departamento" required onChange={(e) => setDepartamento(e.target.value)}>
                <option value="departamento1">Departamento A</option>
                <option value="departamento2">Departamento B</option>
                <option value="departamento3">Departamento C</option>
              </SelectModal>
            </IconInput>
          </Campo>
          <Campo>
            <Label> Cargo:</Label>
            <IconInput>
              <SelectModal name="cargo" id="cargo" required onChange={(e) => setCargo(e.target.value)} >
                <option value="cargo1">Cargo A</option>
                <option value="cargo2">Cargo B</option>
                <option value="cargo2">Cargo C</option>
              </SelectModal>
            </IconInput>
          </Campo>
          <AlinhaBotton>
            <Botton type="submit"> Editar</Botton>
          </AlinhaBotton>
        </Form>
      </Background>
    </>
  );
}

export default Editar;
