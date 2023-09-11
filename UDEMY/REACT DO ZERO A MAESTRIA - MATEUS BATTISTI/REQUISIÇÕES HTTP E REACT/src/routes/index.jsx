import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from '../pages/Error/index';
import DefaultLayout from "../layouts/DefaultLayout";
import Home from '../pages/Home';
import About from '../pages/About'
const Ways = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />}/>
                </Route>  
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Ways;