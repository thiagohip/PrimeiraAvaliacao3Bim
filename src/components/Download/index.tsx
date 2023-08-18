import {ComponentButton} from "../../components"
import Windows from "../../assets/windows.svg"
import Linux from "../../assets/linux.svg"
import Mac from "../../assets/mac.svg"
import * as style from "./style"

export function Download(props: {system: string, desc: string}){

    return (
        <style.Download>

            {props.system == "windows" && (
                <img src={Windows} alt="Windows"/>
            )}
            {props.system == "linux" &&(
                <img src={Linux} alt="Linux" />
            )}
            {props.system == "mac" &&(
                <img src={Mac} alt="Mac" />
            )}
            <style.Desc>
                <h2>Fazer o download para {props.system}</h2>
                <p>{props.desc}</p>
            </style.Desc>
            <ComponentButton text = "Download"></ComponentButton>
        </style.Download>
    )
}