import { useState } from "react";
import Footer from "./components/componentes-footer/Footer";
import Header from "./components/componentes-header/Header";
import Main from "./components/componentes-main/Main";
import "./modulo_scss/App.scss";
import Carrinho from "./components/componentes-header/carrinho/Carrinho";

function App() {
  const [armazenaCarro, setArmazenaCarro] = useState([]);
  const [search, setSearch] = useState("");
  const [abreModal, setAbreModal] = useState(false);
  const [carrinho, setCarrinho] = useState(false);

  const abreCarro = () => {
    setCarrinho(!carrinho);
  };

  return (
    <>
      <Header
        carrinho={abreCarro}
        modal={setAbreModal}
        pesquisa={setSearch}
        search={search}
      />
      <Main
        comprasCarro={setArmazenaCarro}
        modal={abreModal}
        search={search}
        fechaModal={setAbreModal}
        carro={armazenaCarro}
      />
      <Footer />
      <Carrinho
        modificaCarro={setArmazenaCarro}
        objeto={armazenaCarro}
        abreCarro={abreCarro}
        carrinho={carrinho}
      />
    </>
  );
}

export default App;
