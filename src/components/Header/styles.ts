import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Header = styled.header`
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    a{
        color: ${colors.white};
        text-decoration: none;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${colors.white};
`
