import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdicionarProduto from '../pages/adicionarProduto/AdicionarProduto'
import Banner from '../componentes/Banner/Banner'
import Creditos from '../componentes/creditos/Creditos'
import Login from '../pages/login/Login'
import Menu from '../componentes/menu/Menu'
import NotFound from '../pages/notFound/NotFound'
import Produto from '../pages/produto/Produto'
import Produtos from '../pages/produtos/Produtos'
import Rodape from '../componentes/rodape/Rodape'
import Corpo from '../pages/corpo/Corpo'

export default function AppRouter(props){
    return(
        <Router>
            <Menu setFiltro={props.setFiltro} autenticado={props.autenticado}/>
            <Routes>
                <Route path='/' element={<Corpo produtos={props.produtos} setProdutos={props.setProdutos}/>}>
                    <Route index element={<Banner/>}/>
                </Route>
                <Route path='/produtos' element={<Produtos autenticado={props.autenticado} filtragem={props.filtragem} produtos={props.produtos} setProdutos={props.setProdutos} setEditar={props.setEditar} setDeletar={props.setDeletar}/>}/>
                <Route path='/login' element={<Login user={props.user} setAutenticar={props.setAutenticar}/>}/>
                <Route path='/produto/:id' element={<Produto produtos={props.produtos} setProdutos={props.setProdutos}/>}/>
                <Route path='/adicionarproduto' element={<AdicionarProduto setProdutos={props.setProdutos} produtos={props.produtos} setAdicionar={props.setAdicionar}/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Rodape setMensagens={props.setMensagens} mensagens={props.mensagens}/>
            <Creditos/>
        </Router>
    )
}