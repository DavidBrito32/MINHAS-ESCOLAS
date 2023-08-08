
const Props = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h3>Seja bem vindo: {props.filho}</h3>

        <ul>
            {props.nomes.map((item) => (
                <li key={item.id}>nome: {item.nome} - Idade: {item.idade} Anos - Sexo: {item.sexo}</li>
            ))}
        </ul>

    </div>

  )
}

export default Props