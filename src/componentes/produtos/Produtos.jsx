import './Produtos.scss'
import {Link} from 'react-router-dom'
import Botao from '../botao/Botao'
import Itens from '../itens/Itens'
import Modal from '../modal/Modal'
export default function Produtos(props){
    return(
        <main className='bg-light'>
            <div className="container text-center py-4">
                <section className="row d-flex">
                    <div className="d-flex align-items-end justify-content-between mt-5 mb-3">
                        <h2 className="text-start">Todos os produtos</h2>
                        <Link to="/adicionarproduto"><Botao>Adicionar produto</Botao></Link>
                    </div>
                    {props.filtragem.map((item) => (
                        <>
                            <Itens 
                                key={item.id}
                                item={item}
                                responsivo={true}
                                produtos={props.produtos} 
                                setProdutos={props.setProdutos}
                                setDeletar={props.setDeletar}
                            />
                            <Modal
                                produto={item} 
                                setProdutos={props.setProdutos}
                                produtos={props.produtos}
                                setEditar={props.setEditar}
                            />
                        </>
                        ))}

                </section>
            </div>
        </main>
    )
}