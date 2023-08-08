

const Destructing_props = ({marca, cor, anoVeiculo, novo, km, modelo}) => {
    
  return (
    <>
        <p>------------------------------------------------------------</p>
        <h2>Detalhes do carro</h2>
        <ul>
          <li key={1}> marca do Veiculo: <strong>{marca}</strong></li>
          <li key={2}> KM rodados: <strong>{km}</strong></li>
          <li key={3}> Cor do veiculo: <strong>{cor}</strong></li>
          <li key={4}> Modelo do veiculo: <strong>{modelo}</strong></li>
          <li key={5}> Ano de fabricação do veiculo: <strong>{anoVeiculo}</strong></li>
        </ul>
    </>
  )
}

export default Destructing_props