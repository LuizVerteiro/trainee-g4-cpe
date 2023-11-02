import { DivHeader, DivLogo, DivBackground, DivText, DivButtonEntrar, DivCadastro } from "./Styles";
import ImageLogo from "../../Assets/Logo.png"

function Cadastro() {

    return (
        <>
            <DivBackground>
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