import { useState, useRef } from 'react';
import './Game.scss';

const Game = ({score, letters, guess, pickedCategory, guessedLetters, wrongLetters, verifyLetter}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {    
    e.preventDefault();
    verifyLetter(letter)
    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Voce ainda tem {guess} tentativas</p>

      <div className='wordContainer'>
        {letters.map((item, i) => (
          guessedLetters.includes(letters) ?  <span key={i} className='letter'>{item}</span>: <span key={i} className='blanksquare'></span> 
        ))}
      </div>

      <div className='letterContainer'>
        <p>Tente Adivinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input 
          value={letter} 
          onChange={(e) => setLetter(e.target.value)} 
          type="text" name='letter' maxLength={"1"} 
          required
          ref={letterInputRef}
          
          />
          <button>Jogar!</button>
        </form>
      </div>

      <div className='wrongLettersContainer'>
        <p>Letras ja Utilizadas: </p>
          {wrongLetters.map((item, i) => (
            <span key={i}>{item}, </span>
          ))}
      </div>


    </div>
  )
}

export default Game