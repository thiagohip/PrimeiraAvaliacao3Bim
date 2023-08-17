import * as style from "./style"

export function Button(props: {text: string}){
    return(
        <style.Button>
            <button>{props.text}</button>
        </style.Button>
    )
}