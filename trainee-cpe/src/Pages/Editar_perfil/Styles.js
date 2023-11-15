import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80vw;
  height: 22rem;
  border-radius: 50px 0px;
  border: 1px solid white;
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-weight: 500;
  @media (max-width: 600px) {
    height: 25rem;
  }
`; 

export const Label = styled.label`
  width: 10vw;
`
export const Campo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const InputModal = styled.input`
  display: flex;
  background-color: black;
  color: #7d7d7d;
  width: 45vw;
  border: 1px solid white;
  height: 1.5rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  cursor: pointer;
`;

export const SelectModal = styled.select`
  display: flex;
  background-color: black;
  color: #7d7d7d;
  width: 45.6vw;
  border: 1px solid white;
  height: 1.5rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const IconInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  .anticon {
    position: absolute;
    right: 0.7rem;
    color: #7d7d7d;
    cursor: pointer;
  }
`;

///////////////////////////////////////////////////////////////////////////////

export const Title = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const AlinhaBotton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Botton = styled.button`
  display: flex;
  width: 5rem;
  border: 1px solid white;
  padding: 0.6rem;
  border-radius: 10px;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  background-color: transparent;
  color: inherit;
`;
