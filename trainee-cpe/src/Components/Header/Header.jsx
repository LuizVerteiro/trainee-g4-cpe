import { DivBackground, DivLogo, DivText } from "./Styles";
import ImageLogo from "../../Assets/Logo.png"

function Header(){

    return(
      <>
      <DivBackground>
        <DivLogo>
        <img src={ImageLogo} alt="Logo" />
        </DivLogo>
        <DivText>
        Assistec
        </DivText>
      </DivBackground>
      </>  
    );
}

export default Header;