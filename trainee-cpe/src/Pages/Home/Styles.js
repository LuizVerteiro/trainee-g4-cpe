import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80rem;
  color: white;
`;

export const DivText = styled.div`
  padding-left: 0px;
  margin-top: 0px;
  font-family: "Monteserrat";
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  color: #fff;
`;
export const ButtonEntrar = styled.div`

  background: #D32E00;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  text-align:center;
  padding: 2px;
  font-size: 50px;
  display: flex;
  max-width: 200px;
  height: auto;
  padding: 10px 10px 10px 10px;
  justify-content: center;
  align-items: center;
  @media (max-width:1200px){
  width: 100%;
  height: auto;
  font-size: 30px;
  padding: 12px 12px 12px 12px;
 };
`;
export const Title = styled.div`
color: #FFF;
white-space: nowrap;
padding: 100px;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
 @media (max-width:1200px){
  font-size: 25px;
 };
`;
export const Firstpart = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  display:flex;
  margin-right: 2%;
  flex-direction: column;
  @media (max-width:1500px){
 };
`;
export const SecondPart = styled.div`
justify-content: center;
  align-items: center;
  display:flex;
  flex-direction: column;
`;
export const ButtonCadastro = styled.div`
background: #D32E00;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
text-align:center;
padding: 2px;
font-size: 50px;
display: flex;
max-width: 200px;
height: auto;
padding: 10px 10px 10px 10px;
justify-content: center;
align-items: center;
@media (max-width:1200px){
  width: 100%;
  height: auto;
  font-size: 30px;
  padding: 12px 12px 12px 12px;
 };
`;
export const Title2 = styled.div`
  white-space: nowrap;
  padding: 100px;
  color: #FFF;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width:1200px){
  font-size: 25px;

 };
`;
