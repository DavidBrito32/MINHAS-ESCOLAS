import { useCallback, useState, useEffect } from 'react';
import './modulo scss/App.scss';

//import de componentes
import StartScreeam from './components/start_screen/StartScreeam';

const App = () => {
  return (
    <>
      <div className='container-app'>
       <StartScreeam />

      </div>
    </>
  )
}

export default App