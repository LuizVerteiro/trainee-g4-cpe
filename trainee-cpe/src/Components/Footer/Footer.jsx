import { DivBackground, Logos, Texto } from "./Styles";
import linkedin from "../../Assets/linkedin.svg";
import reclameaqui from "../../Assets/reclameaqui.svg";

function Footer() {
  return (
    <DivBackground>
      <Texto>Assistec 2023</Texto>
      <Logos>
        <a href="https://www.linkedin.com/">
          {" "}
          <img src={linkedin} />{" "}
        </a>

        <a href="https://www.reclameaqui.com.br/">
          {" "}
          <img src={reclameaqui} />{" "}
        </a>
      </Logos>
    </DivBackground>
  );
}

export default Footer;
