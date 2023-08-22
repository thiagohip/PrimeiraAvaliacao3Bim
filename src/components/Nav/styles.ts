import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

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
