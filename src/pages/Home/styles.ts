import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 10rem);
    img{
        position: absolute;
        height: 33.438rem;
        top: calc(242px - 5rem);
        left: 460px;
    }
`

export const Article = styled.article`
    position: absolute;
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
    right: 185px;
    gap: 25px;
`