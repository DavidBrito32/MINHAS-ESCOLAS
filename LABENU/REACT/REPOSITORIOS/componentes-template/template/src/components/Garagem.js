import Carro from './Carro'

const Garagem = () => {
    const nome = "David";
    return(
        <>
            <div>
                <h1>Garagem do {nome}</h1>

                <Carro />
                <Carro />
                <Carro />
                <Carro />
            </div>
        </>
    )
}

export default Garagem;