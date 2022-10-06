import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navegate = useNavigate()
    function toBackPage(){
        navegate(-1)
    }
    return(
        <div class="container text-center py-5">
            <section class="row d-flex justify-content-center">
            <a class="text-primary text-start fw-semibold d-flex fs-5 align-self-start align-items-center cursor-pointer" onClick={toBackPage}><i className="material-symbols-outlined ms-2">Arrow_Back</i>Voltar</a>
                <div className="text-center display-4 m-5 p-5 d-flex align-items-center justify-content-center flex-column">
                    <h1 className="border-bottom pb-3 display-1 w-75">404 error</h1>
                    <p className="display-4">Não encontrado</p>
                </div>
            </section>
        </div>
       
    )
}