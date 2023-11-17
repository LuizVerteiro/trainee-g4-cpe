import {
  DivBackground,
  DivLogo,
  DivText,
  DivBottons,
  DivEntrar,
  DivCadastro,
  DivContainner,
  DivDeslogar,
} from "./Styles";
import ImageLogo from "../../Assets/Logo.png";
import useAuthStore from "../../stores/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  const logout = () => {
    clearAuth();
    navigate("/login");
  };
  return (
    <>
      <DivBackground>
        <DivContainner>
          <DivLogo>
            <img src={ImageLogo} alt="Logo" />
          </DivLogo>
          <DivText>Assistec</DivText>
        </DivContainner>

        {/* {!!usuario && <>
          <h2>Seja bem vindo {usuario.nome}</h2>
          <button type="button" onClick={logout}>Deslogar</button>
        </>}  */}
        {!!usuario ? (
          <>
            <h2>Seja bem vindo {usuario.nome}</h2>
            <DivDeslogar type="button" onClick={logout}>
              Deslogar
            </DivDeslogar>
          </>
        ) : (
          <DivBottons>
            <DivEntrar
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Entrar
            </DivEntrar>
            <DivCadastro
              to="/cadastro"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cadastro
            </DivCadastro>
          </DivBottons>
        )}
      </DivBackground>
    </>
  );
}
