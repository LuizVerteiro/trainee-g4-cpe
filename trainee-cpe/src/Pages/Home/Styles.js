import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
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
  background: #d32e00;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  text-align: center;
  padding: 2px;
  font-size: 50px;
  display: flex;
  max-width: 300px;
  height: auto;
  padding: 8px 8px 8px 8px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    font-size: 40px;
    padding: 10px 10px 10px 10px;
  }
`;
export const Title = styled.div`
  color: #fff;
  white-space: nowrap;
  padding: 200px;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;
export const Firstpart = styled.div`
  /* width: 50%; */
  justify-content: center;
  align-items: center;
  display: flex;
  /* margin-right: 2%; */
  flex-direction: column;
  @media (max-width: 1500px) {
  }
`;
export const SecondPart = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const ButtonCadastro = styled.div`
  white-space: nowrap;
  background: #d32e00;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  text-align: center;
  padding: 2px;
  font-size: 50px;
  display: flex;
  max-width: 300px;
  height: auto;
  padding: 8px 8px 8px 8px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    font-size: 40px;
    padding: 10px 10px 10px 10px;
  }
`;
export const Title2 = styled.div`
  white-space: nowrap;
  padding: 200px;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;
