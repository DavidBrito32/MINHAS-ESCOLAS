import './Button.scss';

const Button = ({textoBotão, game}) => {
  return (
    <>
        <button onClick={game} >{textoBotão}</button>
    </>
  )
}

export default Button