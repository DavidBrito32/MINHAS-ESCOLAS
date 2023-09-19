
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Public/Home';
import About from '../pages/Public/About';
import DefaultLayout from '../layouts/Public/'
import Product from "../pages/Public/Product";
import Info from "../pages/Public/Product/Info";
import ErrorPage from "../pages/Error";
import Search from "../components/Search";
const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/products/:id/info" element={<Info  />} />
                    <Route path="/search" element={<Search />}/>
                
                <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>        
        </BrowserRouter>
    )
}

export default Ways;
