import { Link } from 'react-router-dom'
import BotaoMenu from '../botao/BotaoMenu'
import Buscador from '../input/Buscador'
import './Menu.scss'
export default function Menu (props) {
    return(
        <header class="container text-center py-4">
            <nav class="row d-flex align-items-center">
                <div class="col d-flex">
                    <img src="https://trello.com/1/cards/620bf3f8bf76ff71199adca0/attachments/620bf3f9bf76ff71199adec3/download/Logo.png" class='me-5' alt="" />
                    <Buscador
                        setFiltro={props.setFiltro}
                    >
                        O que você deseja encontrar?
                    </Buscador>
                </div>
                <div class="col d-flex justify-content-end">
                    <Link to="/login">
                        <BotaoMenu>Login</BotaoMenu>
                    </Link>
                    <p className='material-symbols-outlined lupa cursor-pointer'>Search</p>
                </div>
            </nav>
        </header>
    )
}