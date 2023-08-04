import './Carro.scss'

const Carro = () => {

    const nomeDoCarro = "Carro do Davi"
    const cor = `Vermelho`;
    const ano = `2023`
    const combustivel = `Flex`

    return (
        <>
            <div className="Carro">
                    <h2>{nomeDoCarro}</h2>
                <ul>
                    <li>Cor do veiculo: {cor}</li>
                    <li>Ano do veiculo: {ano}</li>
                    <li>Tipo de combustivel: {combustivel}</li>
                </ul>
            </div>
        </>
    )
}

export default Carro;