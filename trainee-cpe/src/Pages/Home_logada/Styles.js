import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-between;
  height: 100%;
  color: white;
`;

export const DivText = styled.div`
  padding-right: 40px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  font-family: "Monteserrat";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  color: #fff;
`;

export const DivLogo = styled.div`
  padding-left: 30px;
  width: 208px;
  height: 146px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivOla = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: end;
  text-align: start;
  gap: 32%;
`;

export const Login = styled.button`
  color: #a72500;
  background-color: #000000;
  border: 1px solid #a72500;
  font-weight: 500;
  margin-right: 2rem;
  font-size: 2rem;
  width: 108px;
  height: 37px;
`;

export const Titulo = styled.h1`
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Texto = styled.div`
  text-align: center;
  color: #fff;
  display: flex;
  text-align: center;
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-right: 1rem;
  width: 100%;
  height: auto;
  gap: 3%;
`;

export const DivAjuda = styled.div`
  display: flex;
  flex-grow: 1;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 10px;
  height: auto;
  width: 35%;
  border: 1px solid #fff;
`;

export const DivAvisos = styled.div`
  display: flex;
  flex-grow: 1;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-left: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  border-top: 10px;
  height: auto;
  width: 35%;
  border: 1px solid #fff;
`;
export const Tabela = styled.div``;

export const HeaderTabela = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  height: 40px;
  width: 80%;
  margin-top: 40px;
  padding-left: 5%;
  padding-right: 5%;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
`;

export const UsuarioHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

export const AtividadeHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

export const TempoHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

export const LinhaTabela = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  height: 60px;
  width: 80%;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
`;

export const Usuario = styled.div`
  display: flex;
  width: 33%;
  gap: 5%;
  justify-content: center;
  img {
    width: 10%;
  }
`;

export const NomeCargo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cargo = styled.div`
  display: flex;
  color: #bc2900;
`;

export const Atividade = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

export const Nome = styled.div`
  width: 33%;
`;

export const TempoAtivo = styled.div`
  display: flex;
  width: 33%;
  gap: 5%;
  justify-content: center;
`;
