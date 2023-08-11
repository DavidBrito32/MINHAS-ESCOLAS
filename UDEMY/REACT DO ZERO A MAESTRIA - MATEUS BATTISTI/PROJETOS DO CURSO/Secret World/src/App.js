import { useCallback, useState, useEffect } from 'react';
import './modulo scss/App.scss';
import { WordsList } from './components/data/Word';

//import de componentes
import StartScreeam from './components/start_screen/StartScreeam';
import Game from './components/game/Game';
import GameOver from './components/game/GameOver';


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]


const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);

const [words] = useState(WordsList);

const [pickedWord, setpickedWord] = useState("");
const [pickedCategory, setpickedCategory] = useState("");
const [letters, setletters] = useState("");


const pickWordCategory = () => {
      const categories = Object.keys(words);
      const Category = categories[Math.floor(Math.random() * Object.keys(categories).length)];


      //pick a random word

      const world = words[Category][Math.floor(Math.random() * words[Category].length)];
      return {world, Category}
} 



//start the secrects words
  const startGame = () => {
    //função para word and pick Category
    const {world, Category} = pickWordCategory();
    console.log(world, Category);
    //transform the worlds to letters
    let WordLetters = world.split("");
    WordLetters = WordLetters.map((item) => item.toLowerCase());
    console.log(WordLetters);

    //fill stages
    setpickedWord(world);
    setpickedCategory(Category);
    setletters(letters);

    setGameStage(stages[1].name);
  }

//processar a letra do input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //restarsts the game

  const retry = () => {
    setGameStage(stages[0].name);
  }


  return (
    <>
      <div className='container-app'>
       {gameStage === 'start' && <StartScreeam game={startGame}/>}
       {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
       {gameStage === 'end' && <GameOver retry={retry}/>}


      </div>
    </>
  )
}

export default App