import {
  DivBackground,
  DivLogo,
  DivText,
  DivBottons,
  DivEntrar,
  DivCadastro,
  DivContainner,
} from "./Styles";
import ImageLogo from "../../Assets/Logo.png";

export default function Header() {
  return (
    <>
      <DivBackground>
        <DivContainner>
          <DivLogo>
            <img src={ImageLogo} alt="Logo" />
          </DivLogo>
          <DivText>Assistec</DivText>
        </DivContainner>
        <DivBottons>
        <DivEntrar to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          Entrar
          </DivEntrar>
        <DivCadastro to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
          Cadastro
          </DivCadastro>
        </DivBottons>
      </DivBackground>
    </>
  );
}
