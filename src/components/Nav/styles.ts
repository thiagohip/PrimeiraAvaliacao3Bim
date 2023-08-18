import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const NavBar = styled.nav`
    
`

export const Options = styled.nav`
    ul{
        display: flex;
        list-style-type: none;
        color: ${colors.white};
        gap: 30px;
    }

    ul li{
        font-size: 20pt;
    }
`

export const Hamburger = styled.nav`
    display: none;
    @media (max-width: 780px){
        display: contents;
        .menu-lines{
            z-index: 999;
            width: 35px;
            height: 35px;
            left: (100vw - 40px);
            margin-right: 10px;
        }

        input{
            position: absolute;
            z-index: 1000;
            width: 35px;
            height: 35px;
            left: calc(100vw - 61px);
            opacity: 0;
        }


        ul{
            position: absolute;
            z-index: 998;
            left: calc(100vw - 83.2vw);
            top: 10px;
            background-color: ${colors.white};
            border-left: solid ${colors.black} 2px;
            border-bottom: solid ${colors.black} 2px;
            border-top: solid ${colors.black} 2px;
            height: 200px;
            width: 80vw;
            padding-top: 70px;
            display: none;
            margin-left: 80vw;
            transition: all ease .2s;
        }

        ul li{
            padding: 10px 20px;
            width: 100%;
        }


        ul li a{
            text-decoration: none;
            color: ${colors.black};
            font-size: 22px;
        }

        ul li:hover{
            background-color: rgb(175, 175, 175);
            cursor: pointer;
        }

        input:checked ~ .menu-lines span:nth-child(1){
            transform-origin: 0% 0%;
            transform: rotate(45deg) scaleX(1.25);
        }

        input:checked ~ .menu-lines span:nth-child(2){
            opacity: 0;
        }

        input:checked ~ .menu-lines span:nth-child(3){
            transform-origin: 0% 100%;
            transform: rotate(-45deg) scaleX(1.25);
        }

        input:checked ~ ul{
            display: block;
            margin-left: 0;
        }

    }

`


export const Menu_lines = styled.nav`
    span{
            display: block;
            width: 35px;
            height: 5px;
            margin-bottom: 10px;
            background-color: ${colors.black};
            border-radius: 3px;
            transition: all ease .2s;
    }
`

/*
.hamburger{
    display: none;
}

:root {
    --primary: rgb(237, 9, 9);
    --secondary: rgb(226, 86, 86);
    --third: black;
    --fourth: white;
}

@media(max-width: 600px){
    .hamburger{
        display: contents;
    }
    .menu-lines{
        z-index: 999;
        width: 35px;
        height: 35px;
        left: (100vw - 40px);
        margin-right: 10px;
    }
    .check{
        position: absolute;
        z-index: 1000;
        width: 35px;
        height: 35px;
        left: calc(100vw - 61px);
        opacity: 0;
    }

    .check:hover{
        cursor: pointer;
    }

    .menu-lines span{
        display: block;
        width: 35px;
        height: 5px;
        margin-bottom: 10px;
        background-color: var(--third);
        border-radius: 3px;
        transition: all ease .2s;
    }

    .hamburger ul{
        position: absolute;
        z-index: 998;
        left: calc(100vw - 83.2vw);
        top: 10px;
        background-color: var(--fourth);
        border-left: solid var(--third) 2px;
        border-bottom: solid var(--third) 2px;
        border-top: solid var(--third) 2px;
        height: 200px;
        width: 80vw;
        padding-top: 70px;
        display: none;
        margin-left: 80vw;
        transition: all ease .2s;
    }

    .hamburger ul li{
        padding: 10px 20px;
        width: 100%;
    }


    .hamburger ul li a{
        text-decoration: none;
        color: var(--third);
        font-size: 22px;
    }

    .hamburger ul li:hover{
        background-color: rgb(175, 175, 175);
        cursor: pointer;
    }

    .hamburger input:checked ~ .menu-lines span:nth-child(1){
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.25);
    }

    .hamburger input:checked ~ .menu-lines span:nth-child(2){
        opacity: 0;
    }

    .hamburger input:checked ~ .menu-lines span:nth-child(3){
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.25);
    }

    .hamburger input:checked ~ ul{
        display: block;
        margin-left: 0;
    }

}
*/