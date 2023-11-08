import { DivHeader, DivLogo, DivBackground, DivText, DivButtonEntrar, DivCadastro } from "./Styles";
import ImageLogo from "../../Assets/Logo.png"
import { Header } from "antd/es/layout/layout";
function Cadastro() {

    return (
        <>
            <DivBackground>
                {/* <Header/> */}
                <DivHeader>
                    <DivLogo>
                        <img src={ImageLogo} alt="Logo" />
                        <DivText>
                            Assistec
                        </DivText>
                    </DivLogo>
                    <DivButtonEntrar>
                        Entrar
                    </DivButtonEntrar>
                    <DivCadastro>
                        Cadastro
                    </DivCadastro>
                </DivHeader>
            </DivBackground>
        </>
    );
}

export default Cadastro;