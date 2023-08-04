const Desestructure = ({marca, km, cor, novo}) => { //isso daqui é a forma de desestruturar as props usando {} como se fosse um objeto
  return (
    <>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {novo ? <strong><p>Este Carro é <em>novo</em></p></strong> : <strong><p>Este Carro é <em>Usado</em></p></strong>}
    </>
  )
}

export default Desestructure
