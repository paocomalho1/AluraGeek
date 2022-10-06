import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdicionarProduto from '../componentes/adicionarProduto/AdicionarProduto'
import Banner from '../componentes/Banner/Banner'
import Corpo from '../componentes/corpo/Corpo'
import Creditos from '../componentes/creditos/Creditos'
import Login from '../componentes/login/Login'
import Menu from '../componentes/menu/Menu'
import NotFound from '../componentes/notFound/NotFound'
import Produto from '../componentes/produto/Produto'
import Produtos from '../componentes/produtos/Produtos'
import Rodape from '../componentes/rodape/Rodape'

export default function AppRouter(props){
    return(
        <Router>
            <Menu setFiltro={props.setFiltro}/>
            <Routes>
                <Route path='/' element={<Corpo produtos={props.produtos}/>}>
                    <Route index element={<Banner/>}/>
                </Route>
                <Route path='/produtos' element={<Produtos filtragem={props.filtragem} produtos={props.produtos} setProdutos={props.setProdutos} setEditar={props.setEditar} setDeletar={props.setDeletar}/>}/>
                <Route path='/login' element={<Login user={props.user}/>}/>
                <Route path='/produto/:id' element={<Produto produtos={props.produtos}/>}/>
                <Route path='/adicionarproduto' element={<AdicionarProduto setProdutos={props.setProdutos} produtos={props.produtos} setAdicionar={props.setAdicionar}/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Rodape setMensagens={props.setMensagens} mensagens={props.mensagens}/>
            <Creditos/>
        </Router>
    )
}