import { ComponentDownload } from "../../components"
import * as style from "./styles"

export function Download(){
    return(
        <style.Download>
            <ComponentDownload system="windows" desc = "Compatível com as versões do windows 7, 8, 8.1, 9, e 10"/>
            <ComponentDownload system="linux" desc = "Compatível com a maioria das distribuições linux."/>
            <ComponentDownload system="mac" desc = "Só existe uma versão mac imagino ou talvez tenha"/>
        </style.Download>
    )
}