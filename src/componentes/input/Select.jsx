export default function Select(props){
    return(
        <select class="form-select border-none p-3 fw-light" aria-label="Default select example">
            <option selected onClick={props.setCategoria(props.children)}>{props.children}</option>
            <option value="1" onClick={props.setCategoria(props.opcao1)}>{props.opcao1}</option>
            <option value="2" onClick={props.setCategoria(props.opcao2)}>{props.opcao2}</option>
            <option value="3" onClick={props.setCategoria(props.opcao3)}>{props.opcao3}</option>
        </select>
    )
}