import Picture from "../../assets/picture.png"
import * as style from "../Home/styles"

export function Home() {
  return (
    <style.Main>
      <img src={Picture} alt="" />
      <style.Article>
        <h3>O que é o Nation?</h3>
        <p>Desorganize suas tarefas e objetivos
        <br/>com esse aplicativo que não fara nenhuma 
        <br/>diferença na sua vida
        </p>
        <button>Baixar agora</button>
      </style.Article>
    </style.Main>
  )
}