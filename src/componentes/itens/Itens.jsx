import {Link} from 'react-router-dom'
import '../corpo/Corpo.scss'
import Modal from '../modal/Modal'
import '../produtos/Produtos.scss'
export default function Itens(props){
    function deletarProduto(id){
        const lista = props.produtos.filter(prod => prod.id !== id)
        props.setProdutos(lista)
        props.setDeletar(true)
    }
    return(
     <div class="col-lg-2 col-md-3 col-sm-6 col-6">
        <div className={`card border-none background-color-none`}>
            <div className="produto__img card-img-top border-none p-2 d-flex justify-content-end align-items-start" style={{backgroundImage: `url(${props.item.url})`}}>
                {props.responsivo && <i className="material-symbols-outlined text-light cursor-pointer" onClick={() => {deletarProduto(props.item.id)}}>Delete</i>}
                {props.responsivo && <i className="material-symbols-outlined text-light cursor-pointer" data-bs-toggle="modal" data-bs-target={`#modal${props.item.id}`}>Edit</i>}
            </div>
            <div class="card-body d-flex justify-content-start flex-column px-0 bg-light">
                <h5 class="card-title text-start fw-normal fs-6">{props.item.titulo}</h5>
                <p class="card-text text-start fw-semibold mb-1">R$ {props.item.preco},00</p>
                {props.responsivo || <Link to={`/produto/${props.item.id}`} class="text-primary text-start fw-semibold">Ver produto</Link>}
                {props.responsivo && <p className="text-start">#{props.item.id}</p>}
            </div>
        </div>
    </div>
    )
}