import './Botao.scss'
export default function Botao(props){
    return(
        <button className={`btn bg-primary border-none text-light fw-light py-2 px-3 mt-2 align-self-start hover-botao ${props.class}`}>
            {props.children}
        </button>
    )
}