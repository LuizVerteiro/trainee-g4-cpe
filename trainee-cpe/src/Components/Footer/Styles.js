import styled from "styled-components";

export const DivBackground = styled.div`
  background: linear-gradient(180deg, rgba(222, 49, 0, 0) 0%, #de3100 27.27%);
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 280px) {
    position: end;
  }
`;

export const Texto = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
