import React from "react";
import "./styles.css";

//import de componentes

import Header from "./components/Header";
import MenuVertical from "./components/MenuVertical";
import Card from './components/Card';

import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <div className="tela-inteira">
        <Header />


        <main>
          <MenuVertical />
              <section className="painel-de-videos">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
