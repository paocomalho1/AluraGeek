export default function TextArea(props){
    return(
        <textarea 
        onChange={props.onChange} 
        class={`form-control no-border mb-3 ${props.class}`} 
        placeholder={props.children} 
        rows="3"
        value={props.value}
        required
        >

        </textarea>
    )
}