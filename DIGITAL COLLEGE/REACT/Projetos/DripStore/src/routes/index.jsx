import { BrowserRouter, Routes, Route } from "react-router-dom";
import Padrao from "../layouts/Padrao";
import Home from "../pages/PublicPages/Home";
import MeusPedidos from "../pages/PublicPages/MeusPedidos";
import Produtos from "../pages/PublicPages/Products";
import Categorias from "../pages/PublicPages/Categorias";

import ErrorPage from '../pages/Error';


const Ways = () => {
    return (
        <>       
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Padrao />}>
                            <Route index element={<Home />} />
                            <Route path="/meus-pedidos" element={<MeusPedidos />} />
                            <Route path="/categorias" element={<Categorias />} />
                            <Route path="/products" element={<Produtos />} />                        
                        </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways;