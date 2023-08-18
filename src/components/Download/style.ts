import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const Download = styled.div`
    border-radius: 3rem;
    display: flex;
    align-items: center;
    gap: 100px;
    border: solid ${colors.white} 1px;
    height: 12rem;
    width: calc(80vw);
    padding: 15px;
    justify-content: center;
    img{
        display: block;
        height: 10rem;
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
    
`