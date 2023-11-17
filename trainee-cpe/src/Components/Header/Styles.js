import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 11rem;
  background: linear-gradient(to bottom, #de3100, black);
`;
export const DivDeslogar = styled.button`
  display: flex;
  width: 5rem;
  border: 1px solid white;
  padding: 0.6rem;
  margin-right: 1rem;
  border-radius: 10px;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  @media (max-width: 800px) {
    font-size: 10px;
    padding-bottom: 0.5rem;
  }
`;

export const DivContainner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
export const DivLogo = styled.div`
  width: 5rem;
  height: 5rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
export const DivText = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const DivBottons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  flex-wrap: wrap;
  padding-right: 1rem;
`;

export const DivEntrar = styled(Link)`
  border: 0px;
  padding: 1rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
export const DivCadastro = styled(Link)`
  border: 1px solid white;
  padding: 1rem;
  border-radius: 10px;
  margin-left: 2rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
