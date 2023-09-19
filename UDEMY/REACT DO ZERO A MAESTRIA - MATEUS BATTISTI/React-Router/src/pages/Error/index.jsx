import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>Desculpe, A pagina que voce tentou acessar não existe ou foi removida</h1>

            <Link to={`/`}>Voltar ao Inicio</Link>
        
        </>
    )
}

export default ErrorPage;