import './ModalDelete.scss'
import http from '../../../http'

export default function ModalDelete(props) {
    function deletar(){
        props.setDel(true)
        props.setModal(false)
    }
    function cancelar(){
        props.setModal(false)
    }
    return(
        <div class="corpo__notificacao">
            <div class="corpo__Cnotificacao">
                <h3 class="corpo__Ntitulo">Deletar produto</h3>
                <p class="corpo__Nconteudo">
                Tem certeza de que deseja excluir este Produto? Isso removerá o produto e não poderá ser desfeito.
                </p>
                <div class="corpo__NCbotao">
                    <button class="corpo__Nbotao" onClick={cancelar}>NÃO,CANCELAR</button>
                    <button class="corpo__Nbotao2" onClick={deletar}>SIM,DELETAR</button>
                </div>
            </div>
        </div>
    )

}