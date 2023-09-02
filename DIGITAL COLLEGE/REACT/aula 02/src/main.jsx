/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: "",
//     children: [],
//     errorElement: ""
//   },
//   {
//     path: "/sobre",
//     element: "",
//     children: [],
//     errorElement: ""
//   }
// ]);

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
      {/* <RouterProvider router={route}>
          
      </RouterProvider> */}
      <Estilo />
      <App/>
    </>

)
