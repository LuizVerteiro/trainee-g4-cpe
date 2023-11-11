import { Containner, Title, DivEmail, Email, DivNomeUser, NomeUser, DivSenha, Senha, DivConfirmSenha, ConfirmSenha, DivCargo, Cargo, Botton, Background, AlinhaBotton, InputModal, SelectModal } from "./Styles";
import Header from "../../Components/Header/Header";

import { FaBeer } from 'react-icons/fa';
function Cadastro() {

    return (
        <>
            <Background>
                <Header />
                <Containner>
                    <Title>Realizar Cadastro</Title>
                    <DivEmail>
                        <Email> Email:</Email>
                        <InputModal type="text" placeholder="exemplo@*****.com" />
                    </DivEmail>
                    <DivNomeUser>
                        <NomeUser> Nome de Usuario:</NomeUser>
                        <InputModal type="text" placeholder="Nome de usuário" />
                    </DivNomeUser>
                    <DivSenha>
                        <Senha> Senha:</Senha>
                        <InputModal type="password" placeholder="*****************" />
                    </DivSenha>
                    <DivConfirmSenha>
                        <ConfirmSenha> Confirme sua senha:</ConfirmSenha>
                        <InputModal type="password" placeholder="*****************" 
                        />
                    </DivConfirmSenha>
                    <DivCargo>
                        <Cargo> Cargo:</Cargo>
                        <SelectModal>
                            <option value="cargo1">Cargo A</option>
                            <option value="cargo2">Cargo B</option>
                            <option value="cargo2">Cargo C</option>
                        </SelectModal>
                    </DivCargo>
                    <AlinhaBotton>
                        <Botton> Cadastrar</Botton>
                    </AlinhaBotton>
                </Containner>
            </Background>
        </>
    );
}

export default Cadastro;