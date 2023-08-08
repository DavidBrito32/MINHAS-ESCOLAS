import React from "react";
import "./styles.css";

import img1 from './img/ITACHI.jpg';
import img2 from './img/KAKASHI.jpg';
import img3 from './img/anime-night-stars-sky-clouds-scenery-digital-art-4k-wallpaper-uhdpaper.com-772@0@i.jpg';
import img4 from './img/astronaut-152023.png';
import img5 from './img/colorful-abstract-ai-art-4k-wallpaper-uhdpaper.com-16@0@i.jpg';
import img6 from './img/itachi-crow-sharingan-naruto-anime-4k-uhdpaper.com-1.jpg';
import img7 from './img/naruto-uzumaki-baryon-mode-4k-wallpaper-3840x2160-uhdpaper.com-254.0_c.jpg';
import img8 from './img/night-sky-colorful-beautiful-clouds-mountain-valley-digital-art-4k-wallpaper-uhdpaper.com-608@1@k.jpg';
import img9 from './img/sasuke-sharingan-rinnegan-eyes-lightning-uhdpaper.com-4K-33.jpg';
import img10 from './img/shisui-uchiha-mangekyo-sharigan-crow-uhdpaper.com-4K-43.jpg';
import img11 from './img/anime-night-stars-sky-clouds-scenery-digital-art-4k-wallpaper-uhdpaper.com-772@0@i.jpg';


//import de componentes

import Header from "./components/Header";
import MenuVertical from "./components/MenuVertical";
import Card from './components/Card';

import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="tela-inteira">
        <Header />


        <main>
          <MenuVertical />
              <section className="painel-de-videos">
                <Card titulo={"Itachi"} img={img1}/>
                <Card titulo={"Kakashi"} img={img2}/>
                <Card titulo={"Climbs"} img={img3}/>
                <Card titulo={"Astronauta"} img={img4}/>
                <Card titulo={"Walpaper"} img={img6}/>
                <Card titulo={"Itachi movie"} img={img6}/>
                <Card titulo={"Naruto barion"} img={img7}/>
                <Card titulo={"Montain"} img={img8}/>
                <Card titulo={"Sasuke Rinegan"} img={img9}/>
                <Card titulo={"SHISUI"} img={img10}/>
                <Card titulo={"SHISUI"} img={img11}/>
              </section>
        </main>

      </div>
        <Footer />
    </>
  );
}
