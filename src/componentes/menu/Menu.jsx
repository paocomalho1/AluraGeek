import { Link } from 'react-router-dom'
import BotaoMenu from '../botao/BotaoMenu'
import Buscador from '../input/Buscador'
import './Menu.scss'
export default function Menu (props) {
    function abrirBuscador(){
        document.querySelector('.buscador').classList.remove('display-none')

    }
    function fecharBuscador(){
        document.querySelector('.buscador').classList.add('display-none')

    }
    return(
        <header class="container text-center py-4">
            <nav class="row d-flex align-items-center">
                <div class="col d-flex">
                    <Link to="/">
                    <img src="https://trello.com/1/cards/620bf3f8bf76ff71199adca0/attachments/620bf3f9bf76ff71199adec3/download/Logo.png" class='me-5' alt="" />
                    </Link>
                    <Buscador
                        class="cabecalho__responsivo-input"
                        setFiltro={props.setFiltro}
                    >
                        O que você deseja encontrar?
                    </Buscador>
                </div>
                <div class="col d-flex justify-content-end">
                    {props.autenticado || 
                    <Link to="/login">
                        <BotaoMenu>Login</BotaoMenu>
                    </Link>}
                    {props.autenticado && 
                    <Link to="/">
                        <BotaoMenu>Menu administrador</BotaoMenu>
                    </Link>}
                    <p className='material-symbols-outlined lupa cursor-pointer' onClick={abrirBuscador}>Search</p>
                </div>
            </nav>
            <div className='w-100 h-100 fixed-top buscador cabecalho__responsivo-celular display-none'>
                <div className='h-100 buscador__conteiner d-flex justify-content-start align-items-center flex-column'>
                <p className='material-symbols-outlined cursor-pointer align-self-end m-0 p-0' onClick={fecharBuscador}>Close</p>
                    <Buscador 
                        setFiltro={props.setFiltro}
                        class="cabecalho__responsivo-celular container mt-2"
                    >
                        O que você deseja encontrar?
                    </Buscador>
                </div>

            </div>
        </header>
    )
}