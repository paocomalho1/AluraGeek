import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BotaoLoginCadastroForm from '../botao/BotaoLoginCadastroForm'
import Input from '../input/Input'
import './Login.scss'
export default function Login(props){
    const navigate = useNavigate();
    let [email,setEmail] = useState('')
    let [senha,setSenha] = useState('')
    function onSubmit(evento){
        evento.preventDefault()
        if(props.user.email == email && props.user.senha == senha){
            alert('Login realizado com sucesso')
            navigate('/produtos')
        }
        setEmail('')
        setSenha('')
    }
    return(
        <main class="container-fluid text-center login bg-light">
            <section class="row d-flex justify-content-center">
                <form class="d-flex flex-column col-lg-6" action="/" onSubmit={onSubmit}>
                    <h5 className="fw-bold mb-4">Iniciar Sessão</h5>
                    <div class="mb-3">
                        <Input type="email" onChange={evento =>{setEmail(evento.target.value)}} value={email}>
                            Escreva seu email
                        </Input>
                    </div>
                    <div class="mb-3">
                        <Input type="password" onChange={evento =>{setSenha(evento.target.value)}} value={senha}>
                            Escreva sua senha
                        </Input>
                    </div>
                    <BotaoLoginCadastroForm>Entrar</BotaoLoginCadastroForm>
                </form>
            </section>
        </main>
    )
}