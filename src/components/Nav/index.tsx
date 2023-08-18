import * as style from "./styles"

export function Nav(){



    /*
    <nav class="options">
            <a href="pages/carrinho.html"><img src="img/carrinho.png" alt="Carrinho de compras"></a>
            <img class="conta" src="img/conta.png" alt="Minha conta">
        </nav>
        <!----------------------------->

        <!--Menu no modo mobile-->
        <nav class="hamburger">
            <input type="checkbox" class="check">

            <div class="menu-lines">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul>
                <li><a href="pages/carrinho.html">Carrinho de compras</a></li>
                <li><a href="">Minha conta</a></li>
            </ul>
        </nav>
    */ 
    return(
        <style.NavBar>
            <style.Options>
                    <a href="/">Início</a>
                    <a href="/">Sobre-nós</a>
                    <a href="/">Contato</a>
                    <a href="/download">Download</a>
            </style.Options>
            <style.Hamburger>
            <input type="checkbox"/>
            <style.Menu_lines>
                <span></span>
                <span></span>
                <span></span>
            </style.Menu_lines>

            
            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/">Sobre-nós</a></li>
                <li><a href="/">Contato</a></li>
                <li><a href="/download">Download</a></li>
            </ul>
            </style.Hamburger>
        </style.NavBar> 
    )
}