import { useState } from "react";
import BotaoLoginCadastroForm from "../../componentes/botao/BotaoLoginCadastroForm";
import Input from "../../componentes/input/Input";
import Select from "../../componentes/input/Select";
import TextArea from "../../componentes/input/TextArea";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import http from "../../http";

export default function AdicionarProduto(props){
    const navigate = useNavigate();
    let [id] = useState(uuidv4())
    let [titulo,setTitulo] = useState('')
    let [preco,setPreco] = useState('')
    let [categoria,setCategoria] = useState('')
    let [url,setUrl] = useState('')
    let [descricao,setDescricao] = useState('')

    function onSubmit(evento){
        evento.preventDefault()
        let categoriaPost
        if(categoria == "Star Wars"){
            categoriaPost = 'SW'
        }else if(categoria == "Console"){
            categoriaPost = 'C'
        }else if(categoria == "Diversos"){
            categoriaPost = 'D'
        }
         http.post('produtos/',
             {
                 titulo:titulo,
                 preco:preco,
                 categoria:categoriaPost,
                 url: url,
                 descricao:descricao,
                 user:1,
             }
         )
         props.setProdutos(produtosAntigos => [...produtosAntigos, {
             id,
             titulo,
             preco,
             categoria,
             url,
             descricao,
         }])
         
        setTitulo('')
        setPreco('')
        setTitulo('')
        setCategoria('')
        setUrl('')
        setDescricao('')
        props.setAdicionar(true)
        navigate('/produtos')
    }

    return(
        <main class="container-fluid text-center login bg-light">
            <section class="row d-flex justify-content-center">
                <form class="d-flex flex-column col-lg-6" onSubmit={onSubmit} action="/produtos">
                    <h3 className="fw-bold mb-4 text-start" onClick={() => {console.log(categoria)}}>Adicionar novo produto</h3>
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
                            onChange={(evento) => {setCategoria(evento.target.value)}}
                            value={categoria}
                        >
                        </Select>
                        {/* <Input type="text" onChange={(evento) => {setCategoria(evento.target.value)}} value={categoria}>
                            Categoria
                        </Input> */}
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
                    <BotaoLoginCadastroForm>Adicionar produto</BotaoLoginCadastroForm>
                </form>
            </section>
        </main>
    )
}