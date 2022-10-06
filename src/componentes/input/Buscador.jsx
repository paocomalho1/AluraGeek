export default function Buscador(props){
    function buscar(evento){
        props.setFiltro(evento.target.value)
    }
    return(
        <input class="form-control rounded-5 cabecalho__responsivo-input" type="text" placeholder={props.children} onChange={buscar} aria-label="default input example"/>
    )
}