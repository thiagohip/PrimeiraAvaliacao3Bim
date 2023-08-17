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
                    <li>Início</li>
                    <li>Sobre-nós</li>
                    <li>Contato</li>
                    <li>Download</li>
                </ul>
            </style.NavBar> 
        </style.Header>
    )
}