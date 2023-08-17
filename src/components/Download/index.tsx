import {Button} from "../Button"
import Windows from "../../assets/windows.svg"

export function Download(props: {system: string, desc: string}){
    return (
        <>
            <img src={Windows} alt="Windows"/>
            <div>
                <h2>Fazer o download para {props.system}</h2>
                <p>{props.desc}</p>
            </div>
            <Button text = "Download"></Button>
        </>
    )
}