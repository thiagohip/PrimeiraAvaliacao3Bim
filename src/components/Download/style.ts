import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const Download = styled.div`
    border-radius: 3rem;
    display: flex;
    align-items: center;
    border: solid ${colors.white} 1px;
    height: 13.5rem;
    width: calc(75vw);
    padding-top: 20px;
    justify-content: space-around;
    img{
        height: 10rem;
    }
    @media (max-width: 780px){
        padding: 2rem;
        gap: 1rem;
        height: auto;
        img{
            height: 8rem;
        }   
    }
`

export const Desc = styled.article`
    h2, p{
        font-size: 1.8rem;
        color: ${colors.white};
    }
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 780px){
        h2, p{
            font-size: 1.2rem;
            color: ${colors.white};
        }
    }
    
`