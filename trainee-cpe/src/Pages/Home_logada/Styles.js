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
`;

export const DivAvisos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-top: 10px;
  height: auto;
  width: 35%;
  border: 1px solid #fff;
`;

export const DivOla = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: end;
  text-align: start;
  gap: 30%;
`;

export const Login = styled.button`
  color: #a72500;
  background-color: #000000;
  border: 1px solid #a72500;
  margin-right: 2rem;
`;

export const OlaTexto = styled.h1`
  color: white;
  display: flex;
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;
`;

export const DivAjuda = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 10px;
  height: auto;
  width: 45%;
  border: 1px solid #fff;
`;
