export default function BotaoLoginCadastro(props){
    return(
        <button type="submit" class="btn btn-primary border-none p-3 hover-botao w-100">
            {props.children}
        </button>
    )
}