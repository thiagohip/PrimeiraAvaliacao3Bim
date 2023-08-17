import * as style from "./styles"
import Logo from "../../assets/logo.svg"

export function Header() {
    return (
        <style.Header>
            <style.Logo>
                <img src={Logo} alt="Logo do Nation" />
                <h1>Nation</h1>  
            </style.Logo> 
            <style.NavBar>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre-nós</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Download</a></li>
                </ul>
            </style.NavBar> 
        </style.Header>
    )
}