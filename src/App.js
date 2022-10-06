import Menu from './componentes/menu/Menu'
import Banner from './componentes/Banner/Banner'
import Corpo from './componentes/corpo/Corpo'
import Rodape from './componentes/rodape/Rodape'
import Creditos from './componentes/creditos/Creditos';
import Produtos from './componentes/produtos/Produtos';
import Login from './componentes/login/Login';
import AdicionarProduto from './componentes/adicionarProduto/AdicionarProduto';
import Produto from './componentes/produto/Produto';
import Router from './routes/Routes';
import { useEffect, useState } from 'react';
import json from './componentes/itens/ItensDados.json'

function App() {
  const [produtos ,setProdutos] = useState(json)
  const [filtragem, setFiltragem] = useState(produtos)
  const [user] = useState(
    {
      email:'admin@admin.com',
      senha:'admin'
    }
  )
  const [adicionar, setAdicionar] = useState(false)
  const [editar,setEditar] = useState(false)
  const [deletar, setDeletar] = useState(false)
  const [mensagens,setMensagens] = useState([
  ])
  const [filtro, setFiltro] = useState("")
  useEffect(() =>{
    if(adicionar){
      setProdutos(produtos)
      setFiltragem(produtos)
    }
    setAdicionar(false)
  },[adicionar])
    useEffect(() =>{
      if(editar){
        setProdutos(produtos)
        setFiltragem(produtos)
      }
      setEditar(false)
    },[editar])
    useEffect(() =>{
      if(deletar){
        setProdutos(produtos)
        setFiltragem(produtos)
      }
      setDeletar(false)
    },[deletar])
    function testaBusca(titulo){
      const regex = new RegExp(filtro, 'i')
      return regex.test(titulo)
    }
  useEffect(() =>{

    setFiltragem(produtos.filter((prod) => testaBusca(prod.titulo)))

  },[filtro])


  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      {/* <Menu setFiltro={setFiltro}/>
      <Banner/> */}
      {/* <AdicionarProduto setProdutos={setProdutos} produtos={produtos} setAdicionar={setAdicionar}/> */}
      {/* <Login user={user}/> */}
      {/* <Corpo produtos={produtos}/> */}
      {/* <Produtos filtragem={filtragem} produtos={produtos} setProdutos={setProdutos} setEditar={setEditar} setDeletar={setDeletar}/> */}
      <Router setFiltro={setFiltro} user={user} filtragem={filtragem} produtos={produtos} setProdutos={setProdutos} setAdicionar={setAdicionar} setEditar={setEditar} setDeletar={setDeletar} setMensagens={setMensagens} mensagens={mensagens}/>
      {/* <Rodape setMensagens={setMensagens} mensagens={mensagens}/>
      <Creditos/> */}
    </div>
  );
}

export default App;
