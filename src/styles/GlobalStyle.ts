import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

 body{
    background: linear-gradient(216deg, rgba(204,88,88,1) 0%, rgba(112,45,45,1) 100%);
 }
`

export const colors = {
    white: "#FFFFFF",
    black: "#111111"
}