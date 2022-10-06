import { useEffect, useState } from "react"
import Input from "../input/Input"
import TextArea from "../input/TextArea"

export default function Modal(props){
    let [id] = useState(props.produto.id)
    let [titulo,setTitulo] = useState('')
    let [preco,setPreco] = useState('')
    let [categoria,setCategoria] = useState('')
    let [url,setUrl] = useState('')
    let [descricao,setDescricao] = useState('')
    let atualizar = false

    function onSubmit(evento){

        //editar produto
        evento.preventDefault()
         const index = props.produtos.findIndex(prod => prod.id == props.produto.id)
         const lista = props.produtos
          lista[index] = {
              id: props.produto.id,
              titulo: titulo,
              preco: preco,
              categoria: categoria,
              url: url,
              descricao:descricao,
          }
         setTitulo('')
         setPreco('')
         setTitulo('')
         setCategoria('')
         setUrl('')
         setDescricao('')
         props.setProdutos(lista)
         props.setEditar(true)
    }
      
    return(
        <>
            <div class="modal fade" id={`modal${props.produto.id}`} tabindex="-1" aria-labelledby={`modal${props.produto.id}Label`} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id={`modal${props.produto.id}Label`}>Adicionar novo produto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form class="d-flex flex-column col-lg-12" onSubmit={onSubmit} action="/produtos" id={`forModal${props.produto.id}`}>
                        <div class="mb-3">
                            <Input type="url" onChange={(evento) => {setUrl(evento.target.value)}} value={url}>
                                URL da imagem
                            </Input>
                        </div>
                        <div class="mb-3">
                            <Input type="text" onChange={(evento) => {setCategoria(evento.target.value)}} value={categoria}>
                                Categoria
                            </Input>
                        </div>
                        <div class="mb-3">
                            <Input type="text" onChange={(evento) => {setTitulo(evento.target.value)}} value={titulo}>
                                Nome do produto
                            </Input>
                        </div>
                        <div class="mb-3">
                            <Input type="number" onChange={(evento) => {setPreco(evento.target.value)}} value={preco}>
                                Preço do produto
                            </Input>
                        </div>
                        <TextArea onChange={(evento) => {setDescricao(evento.target.value)}} value={descricao}>
                            Descrição do produto
                        </TextArea>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" form={`forModal${props.produto.id}`} class="btn btn-primary">Salvar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
