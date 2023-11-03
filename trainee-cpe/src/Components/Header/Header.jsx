import { DivBackground, DivLogo, DivText } from "./Styles";
import ImageLogo from "../../Assets/Logo.png"

export default function Header() {

  return (
    <>
      <DivBackground>
        <DivLogo>
          <img src={ImageLogo} alt="Logo" />
        </DivLogo>
        <DivText>Assistec</DivText>

        {/* <ContainerLinks>
          <StyledLink to = "/login" >Entrar</StyledLink>
          <StyledLink to = "/cadastro">Cadastro</StyledLink>
        </ContainerLinks> */}
      </DivBackground>
    </>
  );
}
