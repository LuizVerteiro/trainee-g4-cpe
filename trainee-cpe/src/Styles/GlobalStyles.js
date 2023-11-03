import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    max-width:100%
}
html, body{
    margin:0;
    font-size: 15px;
    @media (max-width: 700px){
        font-size: 11px
    }
}
`;
export default GlobalStyles;

