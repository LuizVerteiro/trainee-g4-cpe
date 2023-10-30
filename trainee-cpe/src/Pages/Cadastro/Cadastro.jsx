import { DivHeader, DivLogo, DivBackground, DivText, DivButtonEntrar, DivCadastro} from "./Styles";
import ImageLogo from "./Images/Logo.png";

function Cadastro(){


    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@300;500;800&display=swap" rel="stylesheet"/>
            <DivBackground> 
                <DivHeader>
                    <DivLogo>
                    <img src={ImageLogo} alt = "Logo" />
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