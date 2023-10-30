import { DivHeader, DivLogo, DivBackground, DivText, DivButtonEntrar} from "./Styles";
import ImageLogo from "./Images/Logo.png";

function Cadastro(){


    return(
        <div>
            <DivBackground> 
                <DivHeader>
                    <DivLogo>
                    <img src={ImageLogo} alt = "Logo" />
                    <DivText>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@300;500;800&display=swap" rel="stylesheet"/>
                    Assistec
                    </DivText>
                    </DivLogo>
                </DivHeader>
            </DivBackground>
        </div>
    );
}

export default Cadastro;