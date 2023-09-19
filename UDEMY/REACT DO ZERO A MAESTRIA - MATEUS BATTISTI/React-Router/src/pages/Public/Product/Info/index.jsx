import { Link, useParams } from "react-router-dom";
const Info = () => {
    const {id} = useParams();
    return (
        <>
            <h1>mais informações do produto {id}</h1>
            <Link to="/">Voltar</Link>
        </>
    )
}

export default Info;