import Botao from '../botao/Botao'
import './Banner.scss'
export default function Banner(){
    return(
        <section id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://trello.com/1/cards/620bf3f8bf76ff71199adc86/attachments/620bf3f9bf76ff71199ade5c/download/banner-image.png" alt="" />
                    <article class="carousel-caption carousel__texto d-flex justify-content-start align-items-start flex-column">
                    <h1 class="mb-3 text-start">Dezembro Promocional</h1>
                    <h6 class="mb-3 text-start">Produtos selecionados com 33% de desconto</h6>
                    <Botao>
                        Ver conteudos
                    </Botao>
                </article>
                </div>
            </div>
        </section>
    )
}