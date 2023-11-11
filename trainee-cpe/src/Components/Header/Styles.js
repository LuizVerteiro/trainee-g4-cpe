import styled from "styled-components";

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 11rem;
    background: linear-gradient(to bottom, #DE3100, black);
`
export const DivLogo = styled.div`
    width: 5rem;
    height: 5rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`
export const DivText = styled.div`
    font-size: 2rem;
    font-weight: bold;
`
export const DivBottons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    flex-wrap: wrap;
    padding-right: 1rem;
`
export const DivEntrar = styled.div`
    border: 0px;
    padding: 1rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`
export const DivCadastro = styled.div`
    border: 1px solid white;
    padding: 1rem;
    border-radius: 10px;
    margin-left: 2rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1); 
    }
`