import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    img{
        height: 37rem;
        padding-bottom: 8rem;
    }

    @media (max-width: 780px){
        display: flex;
        flex-direction: column;
        gap: 1rem;    
    }
    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const Article = styled.article`
    display: flex;
    color: ${colors.white};
    flex-direction: column;
    align-items: center;
    height: 23.75rem;
    p{
        font-size: 1.8rem;
        text-align: center;
    }
    h3{
        font-size: 2.1rem;
    }
    gap: 5rem;
`

