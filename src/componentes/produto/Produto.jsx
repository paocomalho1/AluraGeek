import './Produto.scss'
import Itens from '../itens/Itens'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
export default function Produto(props){
    const { id } = useParams()
    const navegate = useNavigate()
    let produto = {}
    function SearchProduto(){
        const produto = props.produtos.find(prod => prod.id == id)
        return produto
    }
    // console.log(produto)

    if(props.produtos.find(prod => prod.id == id)){
         produto = SearchProduto()
     }else{
         navegate('/notFound')
     }
    return(
        <main className='bg-light'>
            <section class="container text-center produto">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6 col-md-5 p-0">
                        <img class="produto__img-unit"src="https://trello.com/1/cards/620bf3f8bf76ff71199adc94/attachments/620bf3f9bf76ff71199ade8f/previews/620bf3f9bf76ff71199ade94/download/star-wars.png" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-7">
                        <div>
                            <h1 className='text-start'>{produto.titulo}</h1>
                            <p className='text-start'>R$ {produto.preco},00</p>
                            <p className='text-start produto__texto'>{produto.descricao}</p>
                        </div>
                    </div>
                <div class="d-flex align-items-center justify-content-between mt-5">
                        <h2 class="text-start">Produtos similares</h2>
                    </div>
                    {props.produtos.filter(prod => prod.categoria === produto.categoria).map(item =>
                        <Itens item={item}/>
                    )}
                </div>
            </section>
        </main>
    )
}