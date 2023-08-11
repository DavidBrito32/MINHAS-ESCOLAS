import './StartScream.scss';
import Button from '../button/Button';


const StartScreeam = ({game}) => {
  return (
    <>
        <div className='start'>
            <h1>Secrect Word</h1>
            <p>Clique no botão abaixo para iniciar o jogo:</p>
            <Button game={game} textoBotão="Começar o jogo" />
        </div>
    </>
  )
}

export default StartScreeam