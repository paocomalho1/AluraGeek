import './Rodape.scss'
import Botao from '../botao/Botao'
import TextArea from '../input/TextArea'
import Input from '../input/Input'
import { useState } from 'react'
export default function Rodape(props){
    let [nome,setNome] = useState('')
    let [mensagem,setMensagem] = useState('')

    function onSubmit(evento){
        evento.preventDefault()
        props.setMensagens(mensagensAntigas => [...mensagensAntigas, {
            nome,
            mensagem
        }])
        setNome('')
        setMensagem('')
    }
    return(
        <footer class="container-fluid text-center py-5 rodape__cor-fundo">
            <div class="row d-flex align-items-center justify-content-center">
                <div className="col-lg-5 rodape__responsivo">
                    <img src="https://trello.com/1/cards/620bf3f8bf76ff71199adca0/attachments/620bf3f9bf76ff71199adec3/download/Logo.png" class='rodape__responsivo-itens' alt="" />
                    <ul class="list-group list-group-flush rodape__responsivo-itens">
                        <li class="list-group-item border-none background-color-none rodape__responsivo-item"><a href="" class="text-muted">Quem somos nós</a></li>
                        <li class="list-group-item border-none background-color-none rodape__responsivo-item"><a href="" class="text-muted">Politica de privacidade</a></li>
                        <li class="list-group-item border-none background-color-none rodape__responsivo-item"><a href="" class="text-muted">Programa fidelidade</a></li>
                        <li class="list-group-item border-none background-color-none rodape__responsivo-item"><a href="" class="text-muted">Nossas lojas</a></li>
                        <li class="list-group-item border-none background-color-none rodape__responsivo-item"><a href="" class="text-muted">Quero ser franqueado</a></li>
                        <li class="list-group-item border-none background-color-none rodape__responsivo-item"><a href="" class="text-muted">Anuncie aqui</a></li>
                    </ul>
                </div>
                <form className="col-lg-5 d-flex flex-column justify-content-start" onSubmit={onSubmit}>
                    <div class="mb-3">
                        <h5 class="form-label text-start">Fale conosco</h5>
                        <Input type="text" value={nome} onChange={(evento) => {setNome(evento.target.value)}}>
                            Nome
                        </Input>
                    </div>
                    <div class="mb-0 d-flex flex-column">
                        <TextArea value={mensagem} onChange={(evento) => {setMensagem(evento.target.value)}}>
                            Escreva sua mensagem
                        </TextArea>
                    </div>
                    <Botao>
                            Enviar mensagem
                    </Botao>
                </form>
            </div>
        </footer>
    )
}