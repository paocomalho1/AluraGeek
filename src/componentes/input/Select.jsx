export default function Select(props){
    return(
        <select class="form-select border-none p-3 fw-light" aria-label="Default select example" onChange={props.onChange} value={props.value} id="select">
            <option value="Star Wars" selected>{props.opcao1}</option>
            <option value="Console">{props.opcao2}</option>
            <option value="Diversos">{props.opcao3}</option>
        </select>
    )
}