export default function Input(props){
    return(
        <input type={props.type}
            class="form-control border-none p-3" 
            placeholder={props.children}
            onChange={props.onChange}
            value={props.value}
        />
    )
}