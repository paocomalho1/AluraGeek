export default function BotaoMenu(props){
    return(
        <button class='btn text-primary border-primary cabecalho__botao py-2 px-5'>
            {props.children}
        </button>
    )
}