import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Header = styled.header`
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${colors.white};
`

export const NavBar = styled.nav`



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