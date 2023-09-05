/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';
export const Estilo = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Estilo />
      <App/>
    </>

)
