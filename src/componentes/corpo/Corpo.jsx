import Itens from '../itens/Itens'
import './Corpo.scss'
import {Link, Outlet} from 'react-router-dom'

export default function Corpo(props){
    return(
        <>
            <Outlet/>
            <main className='bg-light'>
                <div class="container text-center py-5">
                    <section class="row d-flex justify-content-center">
                        <div class="d-flex align-items-center justify-content-between mt-0">
                            <h2 class="text-start">Star Wars</h2>
                            <Link to="/produtos" class="text-primary text-start fw-semibold d-flex">Ver tudo <i className="material-symbols-outlined ms-2">Arrow_Forward</i></Link>
                        </div>
                        {props.produtos.filter(prod => prod.categoria === "Star Wars").map((item) =>
                                <Itens 
                                    key={item.id}
                                    item={item}
                                    responsivo={false}
                                />
                            
                        )}  
                        <div class="d-flex align-items-center justify-content-between mt-5">
                            <h2 class="text-start">Consoles</h2>
                            <Link to="/produtos" class="text-primary text-start fw-semibold d-flex">Ver tudo <i className="material-symbols-outlined ms-2">Arrow_Forward</i></Link>
                        </div>
                        {props.produtos.filter(prod => prod.categoria === "Consoles").map((item) =>
                            <Itens 
                            key={item.id}
                            item={item}
                            responsivo={false}
                            />
                        )}
                        <div class="d-flex align-items-center justify-content-between mt-5">
                            <h2 class="text-start">Diversos</h2>
                            <Link to="/produtos" class="text-primary text-start fw-semibold d-flex">Ver tudo <i className="material-symbols-outlined ms-2">Arrow_Forward</i></Link>
                        </div>
                        {props.produtos.filter(prod => prod.categoria === "Diversos").map((item) =>
                            <Itens 
                            key={item.id}
                            item={item}
                            responsivo={false}
                            />
                        )}
                    </section>
                </div>
            </main>
        </>
    )
}