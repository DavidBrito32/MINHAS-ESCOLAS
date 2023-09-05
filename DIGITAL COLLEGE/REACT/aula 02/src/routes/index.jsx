import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/pageHome/index";
import Sobre from "../pages/pageSobre/index";
import PageLayout from "../layouts/PageLayout";
import PageNotFound from '../pages/pageNotFound/index'

const Ways = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout />} >
                <Route index element={<Home />} /> 
                <Route path="/sobre" element={<Sobre />} /> 
            </Route>      
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Ways;
