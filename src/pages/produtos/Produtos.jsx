import './Produtos.scss'
import {Link} from 'react-router-dom'
import Botao from '../../componentes/botao/Botao'
import Itens from '../../componentes/itens/Itens'

export default function Produtos(props){
    return(
        <main className='bg-light'>
            <div className="container text-center py-4">
                <section className="row d-flex">
                    <div className="d-flex align-items-end justify-content-between mt-5 mb-3">
                        <h2 className="text-start">Todos os produtos</h2>
                        {props.autenticado && <Link to="/adicionarproduto"><Botao>Adicionar produto</Botao></Link>}
                    </div>
                    {props.filtragem.map((item) => (
                            <Itens 
                                autenticado={props.autenticado}
                                key={item.id}
                                item={item}
                                responsivo={true}
                                produtos={props.produtos} 
                                setProdutos={props.setProdutos}
                                setDeletar={props.setDeletar}
                                setEditar={props.setEditar}
                            />
                        ))}

                </section>
            </div>
        </main>
    )
}