import './GameOver.scss'

const GameOver = ({retry}) => {
  return (
    <div>
        <h1>GameOver</h1>
    <button onClick={retry}>Deseja tentar novamente?</button>
    </div>
  )
}

export default GameOver