import * as style from "./styles"
import Logo from "../../assets/logo.svg"
import {NavBar} from "../../components"

export function Header() {
    return (
        <style.Header>
            <style.Logo>
                <img src={Logo} alt="Logo do Nation" />
                <h1>Nation</h1>  
            </style.Logo> 
            <NavBar></NavBar>
        </style.Header>
    )
}