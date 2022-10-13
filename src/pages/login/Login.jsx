import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BotaoLoginCadastroForm from '../../componentes/botao/BotaoLoginCadastroForm'
import Input from '../../componentes/input/Input'
import './Login.scss'
export default function Login(props){
    const navigate = useNavigate();
    let [email,setEmail] = useState('')
    let [senha,setSenha] = useState('')
    function onSubmit(evento){
        evento.preventDefault()
        const error_email =document.querySelector('.error-email')
        const error_senha =document.querySelector('.error-senha')
        if(props.user.email == email){
            if(props.user.senha == senha){
                alert('Login realizado com sucesso')
                navigate('/')
                props.setAutenticar(true)
            }else{
                error_senha.innerHTML = 'Senha errada' 
                error_email.innerHTML = ''
            }
        }else{
            error_email.innerHTML = 'Email não cadastrado'
            error_senha.innerHTML = ''
        }
    }
    return(
        <main class="container-fluid text-center login bg-light">
            <section class="row d-flex justify-content-center">
                <form class="d-flex flex-column col-lg-6" action="/" onSubmit={onSubmit}>
                    <h5 className="fw-bold mb-4">Iniciar Sessão</h5>
                    <div class="mb-3">
                        <Input type="email" onChange={evento =>{setEmail(evento.target.value)}} value={email}>
                            admin@admin.com
                        </Input>
                        <p className="error-email text-danger m-0 p-0 text-start"></p>
                    </div>
                    <div class="mb-3">
                        <Input type="password" onChange={evento =>{setSenha(evento.target.value)}} value={senha}>
                            superadmin
                        </Input>
                        <p className="error-senha text-danger m-0 p-0 text-start"></p>
                    </div>
                    <BotaoLoginCadastroForm>Entrar</BotaoLoginCadastroForm>
                </form>
            </section>
        </main>
    )
}