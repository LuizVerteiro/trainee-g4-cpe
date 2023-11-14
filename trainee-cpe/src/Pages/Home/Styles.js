import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 120rem;
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
  font-size: 4rem;
  display: flex;
  width: 250px;
  height: auto;
  padding: 8px 8px 8px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  @media (max-width: 500px) {
    font-size: 3rem;
    width: 220px;
  }
  @media (max-width: 280px) {
    font-size: 2rem;
    width: 120px;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const Title = styled.div`
  color: #fff;
  white-space: nowrap;
  padding: 250px;
  font-family: Montserrat;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
  @media (max-width: 280px) {
    font-size: 2rem;
    padding: 90px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const Firstpart = styled.div`
  /* width: 50%; */
  justify-content: center;
  align-items: center;
  display: flex;
  /* margin-right: 2%; */
  flex-direction: column;
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
  font-size: 4rem;
  display: flex;
  width: 420px;
  height: auto;
  padding: 8px 8px 8px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  @media (max-width: 500px) {
    font-size: 3rem;
    width: 220px;
  }
  @media (max-width: 280px) {
    font-size: 2rem;
    width: 170px;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const Title2 = styled.div`
  white-space: nowrap;
  padding: 250px;
  color: #fff;
  font-family: Montserrat;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
  @media (max-width: 280px) {
    font-size: 2.5rem;
    padding: 100px;
  }
`;
