import { useEffect, useState } from "react"
import http from "../../../http"
import Input from "../../../componentes/input/Input"
import Select from "../../../componentes/input/Select"
import TextArea from "../../../componentes/input/TextArea"

export default function Modal(props){
    let [id] = useState(props.produto.id)
    let [titulo,setTitulo] = useState(props.produto.titulo)
    let [preco,setPreco] = useState(props.produto.preco)
    let [categoria,setCategoria] = useState(props.produto.categoria)
    let [url,setUrl] = useState(props.produto.url)
    let [descricao,setDescricao] = useState(props.produto.descricao)
    // useEffect(()=>{
    //     http.get(`produtos/${id}/`)
    //     .then(resposta =>{
    //         setTitulo(resposta.data.titulo)
    //         setPreco(resposta.data.preco)
    //         setCategoria(resposta.data.categoria)
    //         setUrl(resposta.data.url)
    //         setDescricao(resposta.data.descricao)
    //     })
    // },[])

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
        let categoriaPost
        if(categoria == "Star Wars"){
            categoriaPost = 'SW'
        }else if(categoria == "Console"){
            categoriaPost = 'C'
        }else if(categoria == "Diversos"){
            categoriaPost = 'D'
        }
        if(titulo.length < 3){
            alert('Preço invalido')
        }else if(preco < 1){
            alert('Titulo curto demais')
        }
            else{
            http.put(`produtos/${id}/`,{
                titulo: titulo,
                preco: preco,
                categoria: categoriaPost,
                url: url,
                descricao:descricao,
                user:1
               })
               props.setProdutos(lista)
                setTitulo('')
                setPreco('')
                setCategoria('')
                setUrl('')
                setDescricao('')
                props.setEditar(true)
        }
    }
      
    return(
        <>
            <div class="modal fade" id={`modal${props.produto.id}`} tabindex="-1" aria-labelledby={`modal${props.produto.id}Label`} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id={`modal${props.produto.id}Label`}>Editar produto</h1>
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
                        <Select
                            opcao1="Star Wars"
                            opcao2="Consoles"
                            opcao3="Diversos"
                            value={categoria}
                            onChange={(evento) => {setCategoria(evento.target.value)}}
                        >
                            Categoria
                        </Select>
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
                            <p className="error-precoEdit text-danger m-0 p-0 text-start"></p>
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
