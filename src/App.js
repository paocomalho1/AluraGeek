import Router from './routes/Routes';
import { useEffect, useState } from 'react';
import json from './componentes/itens/ItensDados.json'
import http from './http';

function App() {
  const [produtos ,setProdutos] = useState(json)
  const [filtragem, setFiltragem] = useState(produtos)
  const [user,setUser] = useState(
    {
      email:'admin@admin.com',
      senha:'superadmin'
    }
  )
  const [autenticado, setAutenticar] = useState(false)
  const [adicionar, setAdicionar] = useState(false)
  const [editar,setEditar] = useState(false)
  const [deletar, setDeletar] = useState(false)
  const [mensagens,setMensagens] = useState([
  ])
  const [filtro, setFiltro] = useState("")
  useEffect(()=>{
    http.get('users/1').then(resposta =>{
      setUser(resposta.data)
    })
    http.get('users/1/produtos')
    .then(resposta => {
      setProdutos(resposta.data)
      setFiltragem(resposta.data)
    }).catch(
      setProdutos(produtos),
      setFiltragem(produtos),
    )
    setEditar(false)
    setDeletar(false)
    setAdicionar(false)
  },[editar,deletar,adicionar,autenticado])
  // useEffect(() =>{
  //   if(adicionar){
  //     setProdutos(produtos)
  //     setFiltragem(produtos)
  //   }
  //   setAdicionar(false)
  // },[adicionar])
  //   useEffect(() =>{
  //     if(editar){
  //       setProdutos(produtos)
  //       setFiltragem(produtos)
  //     }
  //     setEditar(false)
  //   },[editar])
  //   useEffect(() =>{
  //     if(deletar){
  //       setProdutos(produtos)
  //       setFiltragem(produtos)
  //     }
  //     setDeletar(false)
  //   },[deletar])
    function testaBusca(titulo){
      const regex = new RegExp(filtro, 'i')
      return regex.test(titulo)
    }
  useEffect(() =>{

    setFiltragem(produtos.filter((prod) => testaBusca(prod.titulo)))

  },[filtro])


  return (
    <div>
      <Router autenticado={autenticado} setAutenticar={setAutenticar} setFiltro={setFiltro} user={user} filtragem={filtragem} produtos={produtos} setProdutos={setProdutos} setAdicionar={setAdicionar} setEditar={setEditar} setDeletar={setDeletar} setMensagens={setMensagens} mensagens={mensagens}/>
    </div>
  );
}

export default App;
