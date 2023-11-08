import { Containner, Title, DivEmail, Email, BoxEmail, DivNomeUser, NomeUser, BoxUser, DivSenha, Senha, BoxSenha, DivConfirmSenha, ConfirmSenha, BoxConfirmSenha, DivCargo, Cargo, BoxCargo, Botton } from "./Styles";
import ImageLogo from "../../Assets/Logo.png"
import Header from "../../Components/Header/Header";
function Cadastro() {

    return (
        <>
            <Header/>
            <Containner>
                <Title>Realizar Cadastro</Title>
                <DivEmail>
                    <Email> Email:</Email>
                    <BoxEmail></BoxEmail>
                </DivEmail>
                <DivNomeUser>
                    <NomeUser> Nome de Usuario:</NomeUser>
                    <BoxUser></BoxUser>
                </DivNomeUser>
                <DivSenha>
                    <Senha> Senha:</Senha>
                    <BoxSenha></BoxSenha>
                </DivSenha>
                <DivConfirmSenha>
                    <ConfirmSenha> Confirme sua senha:</ConfirmSenha>
                    <BoxConfirmSenha></BoxConfirmSenha>
                </DivConfirmSenha>
                <DivCargo>
                    <Cargo> Cargo:</Cargo>
                    <BoxCargo></BoxCargo>
                </DivCargo>
                <Botton> Cadastrar</Botton>
            </Containner>
        </>
    );
}

export default Cadastro;