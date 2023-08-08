function Carro(props) {
  return (
    <div>
      <h2>{props.marca}</h2>
      <ul>
        <li key={props.chave}> Modelo: {props.modelo}</li>
        <li key={props.chave}> Ano: {props.ano}</li>
        <li key={props.chave}> Cor: {props.cor}</li>
        <li key={props.chave}> Flex: {props.flex}</li>
      </ul>
    </div>
  );
}

export default Carro;
