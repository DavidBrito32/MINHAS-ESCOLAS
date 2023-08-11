import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import { GlobalStyle } from "./Componentes/GlobalStyles";
import { Principal, Navgation, Cabecalho, Search, PainelVideos, Footer } from "./Componentes/styledComponents/Styles.styledComponents";
import Lista from "./Componentes/Lista/Lista";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
      <GlobalStyle />
      <div className="tela-inteira">
        <Cabecalho>
          <h1>LabeTube</h1>
          <div>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <Search> Pesquisar</Search>
            </div>
        </Cabecalho>

        <Principal>
          <Navgation>
            <Lista />
          </Navgation>

          <PainelVideos>
            <CardVideo image1={card1.imagemDoVideo} titulo={card1.titulo} textoAlternativo={card1.textoAlternativo}
              profile={"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} user={"David"}/>           
          </PainelVideos>
        </Principal>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </>
  );
}
