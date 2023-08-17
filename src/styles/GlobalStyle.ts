import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

 body{
    background: rgb(204,88,88);
    background: linear-gradient(216deg, rgba(204,88,88,1) 0%, rgba(112,45,45,1) 100%);
 }
`

export const colors = {
    white: "#D9D9D9",
    black: "#111111"
}