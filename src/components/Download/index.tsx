import {ComponentButton} from "../../components"
import Windows from "../../assets/windows.svg"
import * as style from "./style"

export function Download(props: {system: string, desc: string}){
    return (
        <style.Download>
            <img src={Windows} alt="Windows"/>
            <style.Desc>
                <h2>Fazer o download para {props.system}</h2>
                <p>{props.desc}</p>
            </style.Desc>
            <ComponentButton text = "Download"></ComponentButton>
        </style.Download>
    )
}