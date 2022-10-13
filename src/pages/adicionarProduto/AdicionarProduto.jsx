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
    let [categoria,setCategoria] = useState('Star Wars')
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
        if(titulo.length < 3){
            console.log(categoria)
            document.querySelector('.error-titulo').innerHTML = 'Titulo curto demais'
            document.querySelector('.error-preco').innerHTML = ''
            document.querySelector('.error-descricao').innerHTML = ''
        }
        else if(preco < 1){
            document.querySelector('.error-preco').innerHTML = 'Preço invalido'
            document.querySelector('.error-titulo').innerHTML = ''
            document.querySelector('.error-descricao').innerHTML = ''
            
        }else if(descricao.length < 3){
            document.querySelector('.error-descricao').innerHTML = 'Descrição curta demais'
            document.querySelector('.error-titulo').innerHTML = ''
            document.querySelector('.error-preco').innerHTML = ''
        }
        else{
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
                        <p className="error-titulo text-danger m-0 p-0 text-start"></p>
                    </div>
                    <div class="mb-3">
                        <Input type="number" onChange={(evento) => {setPreco(evento.target.value)}} value={preco}>
                            Preço do produto
                        </Input>
                        <p className="error-preco text-danger m-0 p-0 text-start"></p>
                    </div>
                    <TextArea onChange={(evento) => {setDescricao(evento.target.value)}} value={descricao}>
                        Descrição do produto
                    </TextArea>
                    <p className="error-descricao text-danger m-0 p-0 text-start"></p>
                    <BotaoLoginCadastroForm>Adicionar produto</BotaoLoginCadastroForm>
                </form>
            </section>
        </main>
    )
}